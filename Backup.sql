PGDMP     )                    y            cidades    13.2    13.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16547    cidades    DATABASE     k   CREATE DATABASE cidades WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE cidades;
                postgres    false                        2615    16548    cidades    SCHEMA        CREATE SCHEMA cidades;
    DROP SCHEMA cidades;
                postgres    false            ?            1259    16568    cidades    TABLE     &  CREATE TABLE cidades.cidades (
    id integer NOT NULL,
    temperatura text,
    umidade text,
    clima text,
    nome text,
    pais text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    contador integer
);
    DROP TABLE cidades.cidades;
       cidades         heap    postgres    false    6            ?            1259    16566    cidades_id_seq    SEQUENCE     ?   CREATE SEQUENCE cidades.cidades_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE cidades.cidades_id_seq;
       cidades          postgres    false    6    202            ?           0    0    cidades_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE cidades.cidades_id_seq OWNED BY cidades.cidades.id;
          cidades          postgres    false    201            $           2604    16571 
   cidades id    DEFAULT     j   ALTER TABLE ONLY cidades.cidades ALTER COLUMN id SET DEFAULT nextval('cidades.cidades_id_seq'::regclass);
 :   ALTER TABLE cidades.cidades ALTER COLUMN id DROP DEFAULT;
       cidades          postgres    false    201    202    202            ?          0    16568    cidades 
   TABLE DATA           q   COPY cidades.cidades (id, temperatura, umidade, clima, nome, pais, created_at, updated_at, contador) FROM stdin;
    cidades          postgres    false    202   7       ?           0    0    cidades_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('cidades.cidades_id_seq', 152, true);
          cidades          postgres    false    201            (           2606    16582    cidades cidades_nome_key 
   CONSTRAINT     T   ALTER TABLE ONLY cidades.cidades
    ADD CONSTRAINT cidades_nome_key UNIQUE (nome);
 C   ALTER TABLE ONLY cidades.cidades DROP CONSTRAINT cidades_nome_key;
       cidades            postgres    false    202            *           2606    16578    cidades cidades_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY cidades.cidades
    ADD CONSTRAINT cidades_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY cidades.cidades DROP CONSTRAINT cidades_pkey;
       cidades            postgres    false    202            ?   ?  x?u??n?P???O?????_?(B?X???8?K?[?)??A?x???$??s??,|2_FgfN?"?I?\??.???%???" \?Y?+!V*d>0??k?b? 5z?ƍ*??w?nS???A]^?T?J?%??z?ͪXx??k7?;<?N?c??M?b9/?H????z?
:(z?x???vSg?䴏@!??LlT?9??o6ҳ??t^Ȭ?A??Ş?XPV??Ïz?k??.uY???????UȨF?????5uC??4?ƛ?'??Iz?S?I?ߓZ^?Z??L?bOTqXV?Nкo?rU?????ٙ
H?ޅ??Q???X ?b8?o??Cݩ?˓???M?P?s??Y?-??,?)B'?Ӑ?z?l?&ӱ???)Dp6g?<?x??"???q????n?e???>:?????@b??(??????f?UWν?? 4?8?fT??p??????3????J???fn?$??U{?#??@??X??pۭ??;M?C??"??????`??????erVO<?Ð?sgǡ??h9Ω22??????"??J*???U=?/?f???0??9w??Y??(??۾M??)???i?\\???& dN?$?e?I??-??K????W??yK?K???XAn??Bฟ?)ntQ?Y]J     