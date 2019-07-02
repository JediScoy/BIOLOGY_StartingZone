# title: In the Dark
# author: Master Scoy

VAR dumb_choice = ""
VAR a_colour = ""

~ dumb_choice = "{~an idiotic choice|a dumb decision|a rather stupid decision|a hastey choice|not well thought out|not an intelligent choice|not a smart idea}" 

Welcome weary adventurer!
* [<i>NEXT</i>]->opening_scene

=opening_scene
You wake up in a cool, dry room. You are engulfed in inky blackness. You get the impression that you are in some sort of dungeon or cave, but its difficult to {~decipher|interpret|perceive} anything. ->senses

=senses
* [Peer into the darkness] ->2_1_see
* [Listen intently] ->2_1_hear
* [Lick the floor] -> 2_1_taste
* [Inhale deeply] ->2_1_smell
* [Touch a hand to the floor] ->2_1_touch
* {senses > 3} [Reach into your tunic] ->2_2

-> DONE

=2_1_see
You peer into the dark, but don't see much. {~Illumination|Light} of some type would be extremely helpful.
->senses


=2_1_hear
You listen intently, but don't hear anything at first. After a few moments you think you can hearing ... rustling in the dark? You hear a scraping sound...far off? Its difficult to judge distance in the {~forboding} darkness.
->senses

=2_1_taste
You give the floor a hearty link. It taste salty with a slight burning sensation. Hopefully its nothing too acidic, alkaline, or otherwise poisonous. In retrospect, it was {dumb_choice} to lick an unknown substance. One never knows what sort of tiny creatures cover a surface.

->senses

=2_1_smell
You inhale deeply. It smells salty and lacks any organic smells. A momement later, a very gentle air current brings faint new smells of a musty, dank nature.
->senses

=2_1_touch
The floor has a rough, crystalline feel to it. Its has the feel of being carved or smoothed though by tools.
->senses

=2_2
Reaching into your tunic you grasp the handle of a greasy torch and pull it out. Feeling around some more you find a small pouch tucked into your trousers with flint and steel in it.

* You strike the flint and steel near the torch. ->flint_strike
* Throw the flint and steel against the floor in frustration. ->2_2_throw

=2_2_throw
After standing in the dark for a moment, you realize that was {dumb_choice}. You fubble around for ten or fifteen minutes on the floor before finding the flint and steel.
* You strike the flint and steel near the torch. ->flint_strike

=flint_strike
{~Nothing happens|A spark starts a flame but it fizzles out|The torch whooshes to life and then quickly dies}.

+ {flint_strike_fail < 4} You strike the flint and steel near the torch again. ->flint_strike_fail
* Throw the flint and steel against the floor in frustration ->2_2_throw

+ {flint_strike_fail > 3} You strike the flint and steel near the torch again with a silent prayer.  ->2_3B

=flint_strike_fail
->flint_strike
-> DONE

=2_3B
A small spark whooshes the torch into life. ->2_4

=2_4
The room is bathed in a soft orange glow as the light reflects off from the walls...
-> END

=2_5
You are in a small room that seems to be carved into solid salt. The albaster walls practically glow from the torch. 
-> END
