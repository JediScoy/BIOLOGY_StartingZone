var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"title: In the Dark"},{"#":"author: Master Scoy"},"^Welcome weary adventurer!","\n","ev","str","^<i>NEXT</i>","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":[{"->":"opening_scene"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"opening_scene":["^You wake up in a cool, dry room. You are engulfed in inky blackness. You get the impression that you are in some sort of dungeon or cave, but its difficult to ",["ev","visit",4,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^sense",{"->":".^.^.29"},null],"s1":["pop","^decipher",{"->":".^.^.29"},null],"s2":["pop","^interpret",{"->":".^.^.29"},null],"s3":["pop","^perceive",{"->":".^.^.29"},null],"#f":5}],"^ much. ",{"->":"senses"},"\n",{"#f":1}],"senses":[["ev","str","^Peer into the darkness","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Listen intently","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Lick the floor","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Inhale deeply","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Touch a hand to the floor","/str","/ev",{"*":".^.c-4","flg":20},"ev","str","^Reach into your tunic","/str",{"CNT?":".^.^"},3,">","/ev",{"*":".^.c-5","flg":21},{"c-0":["^ ",{"->":"2_1_see"},"\n",{"#f":5}],"c-1":["^ ",{"->":"2_1_hear"},"\n",{"#f":5}],"c-2":["^ ",{"->":"2_1_taste"},"\n",{"#f":5}],"c-3":["^ ",{"->":"2_1_smell"},"\n",{"#f":5}],"c-4":["^ ",{"->":"2_1_touch"},"\n",{"#f":5}],"c-5":["^ ",{"->":"2_2"},"\n","done",{"#f":5}]}],{"#f":1}],"2_1_see":["^You peer into the dark, but don't see much. ",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Illumination",{"->":".^.^.17"},null],"s1":["pop","^Light",{"->":".^.^.17"},null],"#f":5}],"^ of some type would be extremely helpful.","\n",{"->":"senses"},{"#f":1}],"2_1_hear":["^You listen intently, but don't hear anything at first. After a few moments you think you can hearing ... rustling in the dark? You hear a scraping sound...far off? Its difficult to judge distance in the ",["ev","visit",1,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"nop",{"s0":["pop","^forboding",{"->":".^.^.11"},null],"#f":5}],"^ darkness.","\n",{"->":"senses"},{"#f":1}],"2_1_taste":["^You give the floor a big lick. It taste salty with a slight burning sensation. Hopefully its nothing too acidic, alkaline, or otherwise poisonous. In retrospect, it was ",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^a rather stupid decision",{"->":".^.^.23"},null],"s1":["pop","^a hasty decision",{"->":".^.^.23"},null],"s2":["pop","^an idiotic decision",{"->":".^.^.23"},null],"#f":5}],"^ to lick an unknown substance. One never knows what sort of tiny creatures cover a surface.","\n",{"->":"senses"},{"#f":1}],"2_1_smell":["^You inhale deeply. It smells salty and lacks any organic smells. A momement later, a very gentle air current brings faint new smells of a musty, dank nature.","\n",{"->":"senses"},{"#f":1}],"2_1_touch":["^You reach a hand down and touch the floor.It has a rough, crystalline feel to it. Its has the feel of being carved or smoothed though by tools.","\n",{"->":"senses"},{"#f":1}],"2_2":[["^Reaching into your tunic you grasp the handle of a greasy torch and pull it out. Feeling around some more you find a small pouch tucked into your trousers with flint and steel in it.","\n",["ev",{"^->":"2_2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^You strike the flint and steel near the torch. ",{"->":"$r","var":true},null]}],["ev",{"^->":"2_2.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Throw the flint and steel against the floor in frustration. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"2_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"flint_strike"},"\n",{"#f":5}],"c-1":["ev",{"^->":"2_2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"2_2_throw"},"\n",{"#f":5}]}],{"#f":1}],"2_2_throw":[["^After standing in the dark for a moment, you realize that was ",["ev","visit",7,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"ev","du",6,"==","/ev",{"->":".^.s6","c":true},"nop",{"s0":["pop","^an idiotic choice",{"->":".^.^.47"},null],"s1":["pop","^a dumb decision",{"->":".^.^.47"},null],"s2":["pop","^a rather stupid decision",{"->":".^.^.47"},null],"s3":["pop","^a hasty decision",{"->":".^.^.47"},null],"s4":["pop","^not well thought out",{"->":".^.^.47"},null],"s5":["pop","^not an intelligent choice",{"->":".^.^.47"},null],"s6":["pop","^not a smart idea",{"->":".^.^.47"},null],"#f":5}],"^. You fubble around for ten or fifteen minutes on the floor before finding the flint and steel.","\n",["ev",{"^->":"2_2_throw.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^You strike the flint and steel near the torch. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"2_2_throw.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"flint_strike"},"\n",{"#f":5}]}],{"#f":1}],"flint_strike":[[["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Nothing happens",{"->":".^.^.23"},null],"s1":["pop","^A spark starts a flame but it fizzles out",{"->":".^.^.23"},null],"s2":["pop","^The torch whooshes to life and then quickly dies",{"->":".^.^.23"},null],"#f":5}],"^.","\n",["ev",{"^->":"flint_strike.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"flint_strike_fail"},4,"<","/ev",{"*":".^.^.c-0","flg":3},{"s":["^You strike the flint and steel near the torch again. ",{"->":"$r","var":true},null]}],["ev",{"^->":"flint_strike.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Throw the flint and steel against the floor in frustration ",{"->":"$r","var":true},null]}],["ev",{"^->":"flint_strike.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"flint_strike_fail"},3,">","/ev",{"*":".^.^.c-2","flg":3},{"s":["^You strike the flint and steel near the torch again with a silent prayer.  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flint_strike.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"flint_strike_fail"},"\n",{"#f":5}],"c-1":["ev",{"^->":"flint_strike.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"2_2_throw"},"\n",{"#f":5}],"c-2":["ev",{"^->":"flint_strike.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"2_3B"},"\n",{"#f":5}]}],{"#f":1}],"flint_strike_fail":[{"->":"flint_strike"},"done",{"#f":1}],"2_3B":["^A small spark whooshes the torch into life. ",{"->":"2_4"},"\n",{"#f":1}],"2_4":["^The room is bathed in a soft orange glow as the light reflects off from the walls...","\n","end",{"#f":1}],"2_5":["^You are in a small room that seems to be carved into solid salt. The albaster walls practically glow from the torch.","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};