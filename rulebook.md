SAUVC Rulebook
----------------

## Objective

The goal is for each team to design and build an Autonomous Underwater Vehicle which can negotiate the tasks put forth under a prescribed time. Also to learn and have fun in the process.

## Structure of the Team

A team may consist of up to eight participants and up to 3 faculty co-supervisors. At least half of the participants must be students at the time of registration.

## The Arena

The challenge will be held in an olympic sized swimming pool. There are 3 tasks in the challenge:

- Swimming through the gate
- Dropping a ball in the correct drum
- Bumping a flare

The first task, swimming through the gate is mandatory and must be completed before attempting any other task. The other tasks can be attempted in any order. Surfacing at any point signifies end of mission.

![arena](img/arena.jpg)

### Starting Zone
The starting zone is a 140×140cm area marked on the surface of water. The teams must start their AUVs from this area. The team may only place the AUV at the water surface, it must autonomously submerge before leaving the starting zone.

### Swimming through the gate
The gate is approximately 800 cm away from the starting point. The AUV has to swim through the 150 cm high gate. The gate will have red and green sides marking port and starboard sides respectively. [10 Points]

![flare](img/gate.jpg)

The following tasks can be done in any order.

### Dropping the ball
There are 4 coloured drums in the arena. All of them equidistant from the gate such that they lie on an arc. The AUV needs to drop a ball in the correct drum to successfully complete this task. Points are only awarded for a ball that remains in the bucket until the end of the game.

There are a few different modes of solving this challenge. The mode needs to be declared to the judges prior to each attempt. Failure to declare will result in the default mode (Optical)

- Optical [20 Points]
	- Drop the ball in the Yellow drum.
	- Dropping the ball in any other drum will be awarded [5 Points]
- Optical+Acoustic [30 Points]
	- A transducer will play a tone. Each frequency corresponds to a coloured drum. The Yellow drum is not used in this mode.
		- 20kHz : Green
		- 30kHz : Red
		- 40kHz : Orange
	- Dropping the ball in any other drum will be awarded [5 Points]
- Acoustic [50 Points]
	- A transducer in the target bucket will play a chirp from 20-30kHz. The Yellow drum is not used in this mode.
	- Dropping the ball in any other drum will be awarded [5 Points]

In the acoustic tasks (Optical+Acoustic/Acoustic), the target drum may change between attempts. The order of the drums may also change.

Drum: Approximately 50cm in diameter
Ball   : 3.5-4.5cm in diameter and weigh no more than 100g in air.
In the event of multiple balls being dropped, only the first ball is taken to consideration.


### Flare
There is a flare marked with an acoustic pinger (37.5 kHz). This flare could be anywhere within the main arena. The AUV should locate and bump the flare causing the golf ball to drop out of the flare. [40 Points]

Flare Pinger: RJE International Pinger Model No. ULB-362/37.5 kHz

![flare](img/flare.jpg)

### Surfacing
Upon successful completion of all tasks, the AUV must surface (anywhere in the arena) to complete the mission. Bonus points proportional to the remaining time will be awarded in accordance with the following formula

Bonus points = (900 - min(RUN_TIME)) • 0.1

i.e. For a best run time of 420s, Bonus = (900-420)•0.1 = 48 Points

Successful completion of all tasks entails bumping the flare and dropping the ball (after swimming through the gate)

### Penalties

Breaching the surface any point during the mission causes the current attempt to come to an end. The team may wish to try again if they still have time left.

|    | Description | Penalty |
| -- | ----------- | ------- |
| 1  | Touching the gate | 2 |
| 2  | If the AUV touches the bottom of the pool or wall for a duration, t| 5 + max(0,4•(t-10)) |


## Specification of AUV

- The AUV must fit within a 140 × 100 × 100 cm box.. An AUV with dimension of less than 70 cm × 50 cm × 50 cm will be given bonus [10 points].
- The AUV must not weigh more than 50 kg in air. An AUV weighing less than 40 kg in air will be given bonus [10 points].
- Power should be self contained. Tethers of any sort are not allowed.
- The voltage of the power source used by each AUV should not exceed 24VDC.
- Pressure of any compressed gas used must not exceed 6 bars.
AUV should be completely autonomous. No communication of any sort is allowed during the game
- The use of explosives, fire or hazardous chemicals is prohibited. Certified lithium batteries are allowed
- If lasers are used, they must be of class 2 or lower. Care must be taken to protect all persons at the venue from harm. Beams must be oriented in such a fashion that they cannot shine into the eyes of the spectators.

## Game Procedure

- Length of a game
  - Each team is given 15 minutes to complete the tasks.
  - In any of the following cases, the game ends immediately.
    - Disqualification is announced in the game.
    - When the judges determine that the game cannot continue.
  - Setting up of AUV
	  - Five minutes is given for setting up the AUV before the game starts.
		- No more than two members of respective teams can engage in setting up of their AUV.
		- The two designated members setting up must wear life jackets. Failure to do so may result in disqualification.
		- Any team that fails to complete setting their AUV within five minutes can resume the setting up again once the game starts.
		- Setting up during the game uses the allocated time for the tasks and game.
		- The AUV can only start from the start zone. This is the only place where the AUV is allowed to be on the water surface.
		- The AUV should start its manoeuvre only after it has completely submerged in the water.
- Retries
	- A retry can be made only after the judge’s permission.
	- The AUV will be passed to the two designated team members standing beside the pool by the divers.
	- A retry would mean that the AUV starts from the start zone with zero points.
	- A maximum of 15 minutes is allowed including all the retries.

## General Restrictions

- Team members are not allowed inside the swimming pool at any point during the game.
- Team members may not disturb the water surface once the game starts.
- Members of other teams are not allowed in the game area.
- Nobody is allowed to wear shoes near the pool area.

## Disqualification

- Oil or lubrication leak causing the pollution of pool.
battery leak causing the pollution of pool.
- The team damages or tries to damage the field, facilities or equipments.
- The team performs any acts that are not in the spirit of fair play.
- The team fails to obey instructions or warnings issued by the referees.
- The team has made a false start for three times in the same match.
- If the team does not abide by the the general restrictions.

## Safety

- AUVs should not leak and pollute the pool.
- AUVs must be designed and manufactured as to pose no danger of any kind to anyone or anything at the venue.
- AUV should have an easily accessible kill switch that turns off the vehicle. This should be marked bright yellow.
- The judges may suspend the challenge if weather turns unfavourable.
- The pool area must be evacuated in case of lightning.

## Others

- The legitimacy of any actions not provided in this rulebook will be subject to discretion of the Judges.
- The dimensions, weights, etc. of the field, facilities and equipments described in this rulebook have a margin of error of ±5% unless otherwise stated. However the dimensions and weights of the AUVs as shown in the rule book are the maximum and cannot be deviated.
- The judges may demand additional explanations on safety issues when the safety of a vehicle is deemed to be in question.

## Sequence of events during the competition

- AUV will undergo weight and size check. Bonus points, if applicable, will be awarded.
- AUV will be tested for battery, oil or lubricant leak. Failing the leak test would lead to disqualification of team.
- AUV will proceed to qualifying round. The bonus points for size and weight is applicable only if the AUV passes the qualifying round.
- AUV passes the qualifying round if it manages to swim between two markers separated by 10 meters and placed underwater without surfacing or touching the bottom/wall. Also the time taken to pass the qualifying decides the sequence in which the teams will participate in the final round of the competition. The team that finished the last in the qualifying round would participate first in the final round.
- The qualified AUVs will proceed for the final rounds of competition.
