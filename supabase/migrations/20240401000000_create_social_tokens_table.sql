-- Migration to create social_media_tokens table to store user tokens securely
create table if not exists social_media_tokens (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  platform text not null,
  access_token text not null,
  refresh_token text,
  token_expires_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create index if not exists idx_social_media_tokens_user_platform on social_media_tokens(user_id, platform);
