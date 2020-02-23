SET CHARACTER_SET_CLIENT = utf8mb4;
SET CHARACTER_SET_CONNECTION = utf8mb4;

-- Project Name : hololive
-- Date/Time    : 2020/02/23 2:57:46
-- Author       : yukikaze506
-- RDBMS Type   : MySQL
-- Application  : A5:SQL Mk-2

-- メンバー
drop table if exists hololive.members cascade;

create table hololive.members (
  id varchar(32) not null comment 'ID'
  , name text not null comment '名前'
  , constraint members_PKC primary key (id)
) comment 'メンバー' ;
