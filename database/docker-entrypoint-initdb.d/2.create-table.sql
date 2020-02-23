SET CHARACTER_SET_CLIENT = utf8mb4;
SET CHARACTER_SET_CONNECTION = utf8mb4;

-- Project Name : hololive
-- Date/Time    : 2020/02/23 22:42:14
-- Author       : yukikaze506
-- RDBMS Type   : MySQL
-- Application  : A5:SQL Mk-2

-- メンバー
drop table if exists hololive.members cascade;

create table hololive.members (
  id varchar(32) not null comment 'ID'
  , name text comment '名前'
  , name_alphabet text comment '名前(アルファベット)'
  , name_bilibili text comment '名前(bilibili)'
  , debut_date date comment 'デビュー日'
  , birthday text comment '誕生日:MM-dd'
  , youtube_channel_id text comment 'YouTubeチャンネルID'
  , youtube_regist_date date comment 'YouTube登録日'
  , constraint members_PKC primary key (id)
) comment 'メンバー' ;

