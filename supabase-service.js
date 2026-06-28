(function () {
  const config = window.TheDiverSupabaseConfig;

  function hasSupabase() {
    return Boolean(config?.url && config?.anonKey && window.supabase?.createClient);
  }

  function normalizeSupabaseUrl(url) {
    return String(url || "").replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
  }

  const supabaseUrl = normalizeSupabaseUrl(config?.url);

  const client = hasSupabase()
    ? window.supabase.createClient(supabaseUrl, config.anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      })
    : null;

  async function getSession() {
    if (!client) return null;
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    return data.session;
  }

  async function signUp(email, password, profile) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: config.redirectTo,
        data: {
          member_id: profile.memberId,
          real_name: profile.realName,
          nickname: profile.nickname,
          gender: profile.gender,
          role: profile.role,
          diving_system: profile.system,
          other_system: profile.otherSystem,
          certification_level: profile.level,
          certification_number: profile.certNo,
          base_dives: Number(profile.dives || 0)
        }
      }
    });
    if (error) throw error;
    if (data.user && data.session) {
      await upsertProfile(data.user.id, profile);
    }
    return data;
  }

  async function signIn(email, password) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }

  async function signOut() {
    if (!client) return;
    const { error } = await client.auth.signOut();
    if (error) throw error;
  }

  async function resetPassword(email) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: config.redirectTo
    });
    if (error) throw error;
    return data;
  }

  async function verifyRecoveryIdentity(email, realName) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client.rpc("check_profile_identity", {
      input_email: email,
      input_real_name: realName
    });
    if (error) throw error;
    return Boolean(data);
  }

  async function updatePassword(password) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client.auth.updateUser({ password });
    if (error) throw error;
    return data;
  }

  function onAuthStateChange(callback) {
    if (!client) return null;
    return client.auth.onAuthStateChange(callback);
  }

  async function getProfile(userId) {
    if (!client || !userId) return null;
    const { data, error } = await client
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();
    if (error) throw error;
    return data ? mapProfileFromRow(data) : null;
  }

  async function upsertProfile(userId, profile) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const row = mapProfileToRow(userId, profile);
    const { data, error } = await client
      .from("profiles")
      .upsert(row, { onConflict: "id" })
      .select()
      .single();
    if (error) throw error;
    return mapProfileFromRow(data);
  }

  async function listForumPosts() {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client
      .from("forum_posts")
      .select("id, topic, title, body, author_display, owner_member_id, created_at")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  }

  async function createForumPost(profileId, profile, payload) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client
      .from("forum_posts")
      .insert({
        profile_id: profileId,
        topic: payload.topic,
        title: payload.title,
        body: payload.body,
        author_display: payload.author,
        owner_member_id: profile.memberId || ""
      })
      .select("id, topic, title, body, author_display, owner_member_id, created_at")
      .single();
    if (error) throw error;
    return data;
  }

  async function listForumReplies(targetType, targetIds) {
    if (!client || !targetIds.length) return [];
    const { data, error } = await client
      .from("forum_replies")
      .select("id, target_type, target_id, body, author_display, owner_member_id, created_at")
      .eq("target_type", targetType)
      .in("target_id", targetIds)
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  }

  async function createForumReply(profileId, profile, payload) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client
      .from("forum_replies")
      .insert({
        profile_id: profileId,
        target_type: payload.targetType,
        target_id: payload.targetId,
        body: payload.body,
        author_display: payload.author,
        owner_member_id: profile.memberId || ""
      })
      .select("id, target_type, target_id, body, author_display, owner_member_id, created_at")
      .single();
    if (error) throw error;
    return data;
  }

  async function listPhotoShares() {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client
      .from("photo_shares")
      .select("id, title, body, photo_urls, rating_average, rating_count, author_display, owner_member_id, created_at")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  }

  async function createPhotoShare(profileId, profile, payload) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client
      .from("photo_shares")
      .insert({
        profile_id: profileId,
        title: payload.title,
        body: payload.body,
        photo_urls: payload.photoUrls,
        author_display: payload.author,
        owner_member_id: profile.memberId || ""
      })
      .select("id, title, body, photo_urls, rating_average, rating_count, author_display, owner_member_id, created_at")
      .single();
    if (error) throw error;
    return data;
  }

  async function listPhotoRatings(photoShareIds) {
    if (!client || !photoShareIds.length) return [];
    const { data, error } = await client
      .from("photo_share_ratings")
      .select("photo_share_id, profile_id, score")
      .in("photo_share_id", photoShareIds);
    if (error) throw error;
    return data || [];
  }

  async function upsertPhotoRating(profileId, photoShareId, score) {
    if (!client) throw new Error("Supabase 尚未載入。");
    const { data, error } = await client
      .from("photo_share_ratings")
      .upsert({
        profile_id: profileId,
        photo_share_id: photoShareId,
        score: Number(score)
      }, { onConflict: "photo_share_id,profile_id" })
      .select("photo_share_id, profile_id, score")
      .single();
    if (error) throw error;
    return data;
  }

  function mapProfileToRow(userId, profile) {
    return {
      id: userId,
      member_id: profile.memberId || null,
      real_name: profile.realName || "",
      nickname: profile.nickname || "",
      gender: profile.gender || "",
      email: profile.email || "",
      role: profile.role || "",
      diving_system: profile.system || "",
      other_system: profile.otherSystem || "",
      certification_level: profile.level || "",
      certification_number: profile.certNo || "",
      base_dives: Number(profile.dives || 0),
    };
  }

  function mapProfileFromRow(row) {
    return {
      memberId: row.member_id || "",
      realName: row.real_name || "",
      nickname: row.nickname || "",
      gender: row.gender || "",
      email: row.email || "",
      password: "",
      role: row.role || "",
      system: row.diving_system || "",
      otherSystem: row.other_system || "",
      level: row.certification_level || "",
      certNo: row.certification_number || "",
      dives: Number(row.base_dives || 0),
      emailVerified: true
    };
  }

  function profileFromUser(user) {
    const meta = user?.user_metadata || {};
    return {
      memberId: meta.member_id || "",
      realName: meta.real_name || "",
      nickname: meta.nickname || "",
      gender: meta.gender || "",
      email: user?.email || "",
      password: "",
      role: meta.role || "",
      system: meta.diving_system || "",
      otherSystem: meta.other_system || "",
      level: meta.certification_level || "",
      certNo: meta.certification_number || "",
      dives: Number(meta.base_dives || 0),
      emailVerified: Boolean(user?.email_confirmed_at)
    };
  }

  window.TheDiverSupabase = {
    client,
    isReady: Boolean(client),
    getSession,
    signUp,
    signIn,
    signOut,
    resetPassword,
    verifyRecoveryIdentity,
    updatePassword,
    onAuthStateChange,
    getProfile,
    upsertProfile,
    listForumPosts,
    createForumPost,
    listForumReplies,
    createForumReply,
    listPhotoShares,
    createPhotoShare,
    listPhotoRatings,
    upsertPhotoRating,
    mapProfileFromRow,
    profileFromUser
  };
})();
