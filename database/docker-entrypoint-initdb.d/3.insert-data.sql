SET CHARACTER_SET_CLIENT = utf8mb4;
SET CHARACTER_SET_CONNECTION = utf8mb4;

INSERT INTO
    hololive.members (id, name)
VALUES
    ('01E1Q1JG7KTXE479TSGNF7JNFF', 'テスト1'),
    ('01E1Q1KCG9AS96VJ17GXGBEBZZ', 'テスト2');

INSERT INTO
    hololive.members (id, name, name_alphabet, name_bilibili, debut_date, birthday, youtube_channel_id, youtube_regist_date)
VALUES
    ('01E1S3SVN9VJ9P1PSZCJ7Z2YK9', 'ときのそら', 'Tokino Sora', '时乃空', '2017-09-07', '05-15', 'UCp6993wxpyDPHUpavwDFqgg', NULL),
    ('01E1S3SY23JSVSS7R711EFHAV9', 'AZKi', 'AZKi', NULL, NULL, '07-01', 'UC0TXe_LYZ4scaW2XMyi5_kw', NULL),
    ('01E1S3SZX00D9E4YNCSEQP2TR7', 'ロボ子さん', 'Roboco-san', '萝卜子', '2018-03-04', '05-23', 'UCDqI2jOz0weumE8s7paEk6g', NULL),
    ('01E1S3T1W5HBZCZZJQ38XKBCW0', 'さくらみこ', 'Sakuramiko', '樱巫女', '2018-08-01', '03-05', 'UC-hM6YJuNYVAmUWxeIr9FeA', NULL),
    ('01E1S3T3VNGNBSX5QXNT2C040V', '白上フブキ', 'Shirakami Fubuki', '白上吹雪', '2018-06-01', '10-05', 'UCdn5BQ06XqgXoAxIhbqw5Rg', NULL),
    ('01E1S3T69N1CGY1W8VKGBR1207', '夏色まつり', 'Natsuiro Matsuri', '夏色祭', '2018-06-01', '07-22', 'UCQ0UDLQCjY0rmuxCDE38FGg', NULL),
    ('01E1S3T9BT5HDS56Q617TN48PM', '夜空メル', 'Yozora Mel', '夜空梅露', '2018-05-13', '10-31', 'UCD8HOxPs4Xvsm8H0ZxXGiBw', NULL),
    ('01E1S3TBC942MKG5HN4NSDERCV', '赤井はあと', 'Akai Haato', '赤井心', '2018-06-02', '08-10', 'UC1CfXB_kRs3C-zaeTG3oGyg', NULL),
    ('01E1S3TD7NZ9357CP7C4XFZ5FF', 'アキ・ローゼンタール', 'Aki Rosenthal', '亚绮-罗森', '2018-06-01', '02-17', 'UCFTLzh12_nrtzqBPsTCqenA', NULL),
    ('01E1S3TFBM6T36BJK624EP6CC1', '湊あくあ', 'Minato Aqua', '湊-阿库娅', '2018-08-08', '12-01', 'UC1opHUrw8rvnsadT-iGp7Cg', NULL),
    ('01E1S3TRE45RSK65D3JD3S1TB9', '癒月ちょこ', 'Yuzuki Choco', '癒月巧可', '2018-09-04', '02-14', 'UC1suqwovbL1kzsoaZgFZLKg', NULL),
    ('01E1S3TTFXXSHJ0E7KW0HM00KA', '百鬼あやめ', 'Nakiri Ayame', '百鬼绫目', '2018-09-03', '12-13', 'UC7fk0CB07ly8oSl0aqKkqFg', NULL),
    ('01E1S3TXAZRMQSJN8B6H367TKR', '紫咲シオン', 'Murasaki Shion', '紫咲诗音', '2018-08-17', '12-08', 'UCXTpFs_3PqI41qX2d9tL2Rw', NULL),
    ('01E1S3V03JVQ153Z6H19HEZWT6', '大空スバル', 'Oozora Subaru', '大空昴', '2018-09-16', '07-02', 'UCvzGlP9oQwU--Y0r9id_jnA', NULL),
    ('01E1S3V2AB0TERQHZ3FD8803GV', '大神ミオ', 'Ookami Mio', '大神澪', '2018-12-07', '08-20', 'UCp-5t9SrOQwXMU7iIjQfARg', NULL),
    ('01E1S3V4EX4ETTDFYVH688A4NT', '猫又おかゆ', 'Nekomata Okayu', '猫又小粥', '2019-04-06', '02-22', 'UCvaTdHTWBGv3MKj3KVqJVCw', NULL),
    ('01E1S3V7DCE4RP6RTW4HBJDK4V', '戌神ころね', 'Inugami Korone', '戌神沁音', '2019-04-13', '10-01', 'UChAnqc_AY5_I3Px5dig3X1Q', NULL),
    ('01E1S3V9HMVETDXG1HH952K51K', '不知火フレア', 'Shiranui Flare', '不知火芙蕾雅', '2019-08-07', '04-02', 'UCvInZx9h3jC2JzsIzoOebWg', NULL),
    ('01E1S3VBD9DN9R06ZQKM9NZQDG', '白銀ノエル', 'Shirogane Noel', '白银诺艾尔', '2019-08-08', '11-24', 'UCdyqAaZDKHXg4Ahi7VENThQ', NULL),
    ('01E1S3VD8RRFJZQE27A25KZ188', '宝鐘マリン', 'Houshou marine', '宝钟玛琳', '2019-08-11', '07-30', 'UCCzUftO8KOVkV4wQG1vkUvg', NULL),
    ('01E1S3VFDRDD3DAP2782ZE8EYP', '兎田ぺこら', 'Usada Pekora', '兔田佩克拉', '2019-07-17', '01-12', 'UC1DCedRgGHBdm81E1llLhOQ', NULL),
    ('01E1S3VHCYR3MGRWEH0QSZWPPX', '潤羽るしあ', 'Uruha Rushia', '润羽露西娅', '2019-07-18', '01-22', 'UCl_gCybOJRIgOXw6Qb4qJzQ', NULL),
    ('01E1S3VK9R0RN1167M99TK432B', '星街すいせい', 'Hoshimati Suisei', '星街彗星', '2018-03-22', '03-22', 'UC5CwaMl1eIgY8h02uZw7u8A', NULL),
    ('01E1S3VN5TPGY6C6R69S6N88VW', '天音かなた', 'Amane Kanata', NULL, '2019-12-27', '04-22', 'UCZlDXzGoo7d44bwdNObFacg', NULL),
    ('01E1S3VQ4VJTEHF6AS9E2TZ25K', '桐生ココ', 'Kiryu Coco', NULL, '2019-12-28', '06-17', 'UCS9uQI-jC3DE0L4IpXyvr6w', NULL),
    ('01E1S3VS93QFXNTC4MS5H88VMR', '角巻わため', 'Tsunomaki Watame', NULL, '2019-12-29', '06-06', 'UCqm3BQLlJfvkTsX_hvm0UmA', NULL),
    ('01E1S3VVBS67DVPAN1DGTHWB8Z', '常闇トワ', 'Tokoyami Towa', NULL, '2020-01-03', '08-08', 'UC1uv2Oq6kNxgATlCiez59hw', NULL),
    ('01E1S3VX7N343ZGJAMNDN2GC41', '姫森ルーナ', 'Himemori Luna', NULL, '2020-01-04', '10-10', 'UCa9Y57gfeY0Zro_noHRVrnw', NULL),
    ('01E1S3VZ1NHF31N4CEAHM2ZXC9', '花咲みやび', 'Hanasaki Miyabi', NULL, '2019-06-08', '03-03', 'UC6t3-_N8A6ME1JShZHHqOMw', NULL),
    ('01E1S3W1E31P0PBZ79JEW13JYJ', '奏手イヅル', 'Kanade Izuru', NULL, '2019-06-22', '08-12', 'UCZgOv3YDEs-ZnZWDYVwJdmA', NULL),
    ('01E1S3W312RDP6A4ZH6F0M2KYV', '鏡見キラ', 'Kagami Kira', NULL, '2019-06-09', '10-26', 'UCEzsociuFqVwgZuMaZqaCsg', NULL),
    ('01E1S3W5M2Z70EFTNWWGR52B6C', 'アルランディス', 'Arurandeisu', NULL, '2019-09-08', '11-11', 'UCKeAhJvy8zgXWbh9duVjIaQ', NULL),
    ('01E1S3W7DG8K9DT53V6YADR25Y', '薬師寺朱雀', 'Yakushiji Suzaku', NULL, '2019-09-07', '03-24', 'UCGKgJ4MtJ1coi6tWJUfnsQA', NULL),
    ('01E1S3W9AQKYY4V93F7A947W8E', '律可', 'Rikka', NULL, '2019-10-20', '04-15', 'UC9mf_ZVpouoILRY9NUIaK-w', NULL),
    ('01E1S3WB595VQ4X6G389DTWHY2', 'アステル・レダ', 'Astel Leda', NULL, '2019-12-07', '06-06', 'UCNVEsYbiZjH5QLmGeSgTSzg', NULL),
    ('01E1S3WD5NT2HQ3Y33RWWQEG3D', '岸堂天真', 'Kishido Temma', NULL, '2019-12-14', '04-18', 'UCGNI4MENvnsymYjKiZwv9eg', NULL),
    ('01E1S3WEYYZ5AXC9JS6XYDKTK8', '夕刻ロベル', 'Yukoku Roberu', NULL, '2019-12-24', '09-12', 'UCANDOlYTJT7N5jlRC3zfzVA', NULL),
    ('01E1S3WGYZYQFQDSM1RDWC9S7V', '夜霧', 'Yogiri', '夜霧', NULL, NULL, NULL, NULL),
    ('01E1S3WJYC2SYS6A8WABE6BV44', '希薇婭', 'Civia', '希薇婭', NULL, NULL, NULL, NULL),
    ('01E1S3WMYS4NKYKNYRDYFJK82P', '黒桃影', 'Spade Echo', '黒桃影', NULL, NULL, NULL, NULL);
