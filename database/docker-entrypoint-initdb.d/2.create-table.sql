SET CHARACTER_SET_CLIENT = utf8mb4;
SET CHARACTER_SET_CONNECTION = utf8mb4;

-- Project Name : hololive
-- Date/Time    : 2020/02/25 20:50:00
-- Author       : yukikaze506
-- RDBMS Type   : MySQL
-- Application  : A5:SQL Mk-2

-- Youtube情報
drop table if exists hololive.youtube cascade;

create table hololive.youtube (
  id varchar(32) not null comment 'ID'
  , members_id varchar(32) not null comment 'メンバーID'
  , channel_id text not null comment 'チャンネルID'
  , channel_name text comment 'チャンネル名'
  , subscriber_count integer unsigned comment 'チャンネル登録者数'
  , view_count integer unsigned comment '視聴回数'
  , banner_image_url text comment 'バナー'
  , banner_image_url_mobile text comment 'バナー(モバイル)'
  , user_icon text comment 'ユーザーアイコン'
  , original_data json comment 'オリジナルデータ'
  , last_updated datetime comment '更新日時'
  , constraint youtube_PKC primary key (id)
) comment 'Youtube情報' ;

-- メンバー
drop table if exists hololive.members cascade;

create table hololive.members (
  id varchar(32) not null comment 'ID'
  , name text comment '名前'
  , name_alphabet text comment '名前(アルファベット)'
  , name_bilibili text comment '名前(bilibili)'
  , debut_date date comment 'デビュー日'
  , birthday text comment '誕生日:MM-dd'
  , twitter_account text comment 'Twitterアカウント'
  , bilibili_account text comment 'bilibiliアカウント'
  , constraint members_PKC primary key (id)
) comment 'メンバー' ;

alter table hololive.youtube
  add constraint youtube_FK1 foreign key (members_id) references hololive.members(id)
  on delete cascade
  on update cascade;
