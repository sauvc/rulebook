title: The Singapore AUV Challenge 2018 Rulebook
---

<style>
	.caption {
		text-align:center
	}

  .points {
    text-decoration:underline;
    color: #21a796;
  }

  .end {
    text-decoration:underline ;
    color: #35b720 ;
  }

  .abort {
    text-decoration:underline;
    color: #bd1717;
  }

  .role{
    font-weight: 600;
    color: #0139b1;
  }
</style>

# The Singapore AUV Challenge 2018 Rulebook

<center>Version : 2</center>
<center>Updated : 19th Nov 2017</center>

Table of Contents
=================

  * [Objectives](#objectives)
  * [Structure of the Team](#structure-of-the-team)
  * [Video Submission](#video-submission)
  * [Qualification](#qualification)
  * [The Arena](#the-arena)
     * [Starting Zone](#starting-zone)
  * [Tasks](#tasks)
     * [1. Navigation](#1.-navigation)
        * [Points.](#points)
        * [Specification of props.](#specification-of-props)
     * [2. Target Acquisition](#2.-target-acquisition)
        * [Points.](#points-1)
        * [Specification of props.](#specification-of-props-1)
     * [3. Target Reacquisition](#3.-target-reacquisition)
        * [Points.](#points-2)
        * [Specification of props.](#specification-of-props-2)
     * [4. Localization](#4.-localization)
        * [Points.](#points-3)
        * [Specification of props.](#specification-of-props-3)
     * [Surfacing](#surfacing)
     * [Aborting](#aborting)
     * [Automatic Abort](#automatic-abort)
     * [Timing Bonus](#timing-bonus)
     * [Penalties](#penalties)
  * [Specification of AUV](#specification-of-auv)
     * [Size](#size)
     * [Power](#power)
     * [Safety](#safety)
     * [Communications](#communications)
  * [Game Procedure](#game-procedure)
     * [Sequence of events during the competition](#sequence-of-events-during-the-competition)
     * [Practice Rounds](#practice-rounds)
     * [Length of a game](#length-of-a-game)
     * [Retries](#retries)
  * [Technical Presentation](#technical-presentation)
     * [Presentation Rubrics](#presentation-rubrics)
  * [Certificate of Participation](#certificate-of-participation)
  * [General Restrictions](#general-restrictions)
  * [Disqualification](#disqualification)
  * [Others](#others)

## Objectives

The goal is for each team to develop an Autonomous Underwater Vehicle (AUV) which can negotiate the tasks put forth under a prescribed time. Also to learn and have fun in the process.

![arena](img/sauvc-2017.jpg)
<div class="caption"> The SAUVC 2017 Participants.</div>

## Structure of the Team

A team may consist of up to **8 participants** and up to **3 faculty co-supervisors**. At least half of the participants must be students at the time of registration.

![arena](img/team.jpg)
<div class="caption"> Figure 1. One of the teams with faculty co-supervisors from the 2017 Competition.</div>

## Video Submission

All teams have to submit a video of their AUV prior to the competition. The video has to

-  be maximum **5 minutes** long,
-  be submitted before February 8, 2018,
-  showcase the AUV swimming underwater for at least **10 seconds**.

Videos will be reviewed by the organizing committee and **only teams with accepted videos be allowed to attend the competition**.

The origanisers reserve the right to publish the video submissions after the competition.

## Qualification

- AUVs have to pass a qualifying round before they can participate in the main arena.
- To qualify, an AUV has to swim between two markers separated by **10 meters** and without surfacing or touching the bottom/wall.
- From the list of all qualified teams, **only 15** teams, with the fastest time for the qualification round, will advance to the final round.
- The time taken to pass the qualifier round decides the sequence in which the teams will participate in the final round of the competition. The team that finished the last in the qualifying round would participate first in the final round.

![flare](img/qualification.jpg)
<div class="caption"> Figure 2. A team attempting qualification in the 2017 Competition.</div>

## The Arena

The challenge will be held in an olympic sized swimming pool (50m x 25m).

![arena](img/arena.jpg)
<div class="caption"> Figure 3. Top-view of the Arena. </div>

<br>

![arena](img/arena-2017.jpg)
<div class="caption"> Figure 4. Picture of the Arena from 2017 Competition.</div>

<br>

![arena](img/arena-2-2017.jpg)
<div class="caption"> Figure 5. Picture of the Arena from 2017 Competition.</div>

### Starting Zone
The starting zone is a **140×140cm area** marked on the surface of water. The teams  **must** start their AUVs from this area. The team may only place the AUV at the water surface, it must autonomously submerge **before** leaving the starting zone.

![arena](img/starting-zone-2017.jpg)
<div class="caption"> Figure 6. Picture of the Starting Zone from 2017 Competition.</div>

## Tasks
There are 4 tasks in the challenge:

1. [Navigation](#1.-navigation)
1. [Target Acquisition](#2.-target-acquisition)
1. [Target Reacquisition](#3.-target-reacquisition)
1. [Localization](#4.-localization)

The first task, Navigation, is mandatory and **must be completed** before attempting any other task. The other tasks can be attempted in any order. Surfacing at any point signifies <span class="end"><em>end of attempt</em></span>.

### 1. Navigation
The aim of the this task is to swim through a gate in water. The gate may be located anywhere on a horizontal line, parallel to the side of the swimming pool, approximately 8m away from the starting point. See Figure 3. The AUV has to swim through the 150 cm high gate without touching the gate.

![flare](img/gate-2016.jpg)
<div class="caption"> Figure 7. Picture of the gate from 2016 Competition.</div>

#### Points.

If the AUV successfully passes through the gate,<span class="points"><strong>10 Points</strong></span> will be awarded.

#### Specification of props.

|   |       Prop       |              Description                |
|---|:----------------:|:---------------------------------------:|
| 1 | Gate             | 150cm wide and 150cm high gate with <span style="color:red">red</span> and <span style="color:green">green</span> markings on port and starboard sides respectively.

![flare](img/gate.jpg)
<div class="caption"> Figure 8. Front-view of the gate. </div>

### 2. Target Acquisition
The aim of the task is to detect and acquire a target among a series of drums at the bottom of the pool, in the target zone.

A target zone is defined by a <span style="color:green">green colored mat</span> laid out on the floor of the pool. The mat is 8m x 2m in size. Figure 3. shows the location of the mat with respect to the arena.

There are 4 colored drums in the arena. All of them are on the mat. One of the drums, chosen at random, will be <span style="color:blue">blue</span> in color, while the rest are <span style="color:red">red</span> in color. One of the <span style="color:red">red drums</span>, chosen at random, will contain an acoustic pinger. The AUV needs to drop a ball in one of the drums to successfully complete this task. Points will be awarded based on which drum the ball is dropped into. In the event of multiple balls being dropped, only the **first ball** is taken to consideration.

The location of the <span style="color:red">red drum</span> which contains the acoustic pinger may be randomized between attempts, as may be the order of the drums. The order or the drums and location of the pinger will be decided by the organizing committee.

#### Points.

Points will be awarded as follows.

- Drop the ball in the <span style="color:blue">blue drum</span>: <span class="points"><strong>30 Points</strong></span>
- Drop the ball in the <span style="color:red">red drum</span> with the pinger: <span class="points"><strong>50 Points</strong></span>
- Dropping the ball in any other <span style="color:red">red drum</span>: <span class="points"><strong>10 Points</strong></span>

#### Specification of props.

|   |       Prop       |              Description                |
|---|:----------------:|:---------------------------------------:|
| 1 | Drum             | 60cm in diameter and 30cm in depth.     |
| 2 | Ball             | 3.5-4.5cm in diameter and weigh no more than 200g in air. Provided by teams. |
| 3 | Drum Pinger    | [RJE International Pinger Model No. ULB-362B/45 kHz](http://www.rjeint.com/wp-content/uploads/2017/01/ULB-362-ULB-362PL-Manual.pdf).|

![flare](img/drums-2017.jpg)
<div class="caption"> Figure 9. Picture target zone and drums from the 2017 Competition.</div>
<br>
![pinger](img/pinger.jpg)
<div class="caption"> Figure 10. Picture of a 45kHz pinger.</div>


### 3. Target Reacquisition
The aim of this task is to reacquire a previously detected target.

This task is only attemptable if the [Target Acquisition](#2.-target-acquisition) has been successfully completed. Furthermore, the AUV has to leave the target zone, before it can attempt the Target Reacquisition task. Every part of the AUV needs to clear the target zone, before it can be considered outside the target zone.

After the AUV is outside the target zone, it needs to reacquire the target and pick up the ball that it dropped in the [Target Acquisition](#2.-target-acquisition) task. The AUV has to hold on to the ball till the <span class="end"><em>end of attempt</em></span> to successfully complete this task.

This task does not have to be attempted immediately after Target Acquisition task, other tasks may be attempted in between.

#### Points.

If the AUV successfully picks up the ball and holds on to it till the <span class="end"><em>end of the attempt</em></span>, <span class="points"><strong>60 Points</strong></span> will be awarded.

#### Specification of props.

|   |       Prop       |              Description                |
|---|:----------------:|:---------------------------------------:|
| 1 | Target zone      | <span style="color:green">Green</span> mat 8m x 2m in size.|
| 2 | Ball             | Same ball used in target acquisition task. Provided by the teams.|

### 4. Localization
The aim of this task is to localize on a flare. The flare is marked with an acoustic pinger. This flare could be located **anywhere** within the main arena. The AUV should locate and bump the flare causing the golf ball on the flare to drop out. The flare will be <span style="color:#E0D000">yellow</span> in color.

#### Points.

If the AUV successfully causes the ball to drop from the flare, <span class="points"><strong>40 Points</strong></span> will be awarded.

#### Specification of props.

|   |       Prop       |              Description                |
|---|:----------------:|:---------------------------------------:|
| 1 | Flare            | 150cm high and <span style="color:#E0D000">yellow</span> in color.|
| 2 | Flare Pinger     | [RJE International Pinger Model No. ULB-362B/37.5 kHz](http://www.rjeint.com/wp-content/uploads/2017/01/ULB-362-ULB-362PL-Manual.pdf).|

![flare](img/flare.jpg)
<div class="caption"> Figure 11. Side-view of the flare. </div>

<br>

![flare](img/flare-2-2016.jpg)
<div class="caption"> Figure 12. Picture of the flare from 2016 Competition.</div>

<br>

![flare](img/flare-2016.jpg)
<div class="caption"> Figure 13. Picture of the flare from 2016 Competition.</div>


### Surfacing

Breaching the surface any point during the mission causes <span class="end"><em>end of the current attempt</em></span>, the total points for that attempt will be computed based on the tasks accomplished in that attempt and the timing bonus (if applicable) and a <span class="points"><strong>5 Points</strong></span> bonus for ending. The team may wish to retry if they still have time left.

### Aborting
At any time during the mission, current attempt can be <span class="abort"><em>aborted</em></span>, by indicating to the <span class="role">Game Master</span>. The divers would then retreive the AUV back to the starting zone. The timing for the current attempt is stopped at the time of indication. The team may wish to retry if they still have time left.

In the case of an aborted attempt, the team would be awarded the points for all previously successfully completed tasks during the current attempt.

### Automatic Abort
If the AUV touches the bottom or the side walls of the pool for **a cumulative time of more than 10 seconds or 5 discrete touches**, the current attempt would be automatically <span class="abort"><em>aborted</em></span>. The divers would then retreive the AUV back to the starting zone. The team may wish to retry if they still have time left.

In the case of an automatic aborted attempt, the team would be awarded the points for all previously successfully completed tasks during the attempt.

### Timing Bonus

At the <span class="end"><em>end of an attempt</em></span>, as long as the AUV has successfully completed at least **2 tasks**, the Navigation task and any other task, bonus points proportional to the remaining time will be awarded in accordance with the following formula.

`Bonus points = (900 - RUN_TIME) • 0.03`

For eg. For a run time of 420s, Bonus = (900-420)•0.03 = 14.4 Points

### Penalties

There are penalty points for touching the floor or wall of the pool at any time, and also for touching the gate during a specific attempt. This penalty points are:

|   |               Description               | Penalty Points |
|---|:---------------------------------------:|:--------------:|
| 1 | Touching the gate                       |        2       |
| 2 | Touching the bottom of the pool or wall |        5       |

### Examples

Here are some examples scenarios and how they would be scored.

#### Example 1

 - Team launches AUV from starting zone.
 - AUV crosses the gate and completes the Navigation task, but touches the side of the gate while passing through.
 - AUV can't find the location next task and ends the mission by rising to the surface.

|   |                 Task                    |     Points     |
|---|:---------------------------------------:|:--------------:|
| 1 | Navigation Task                         |        10      |
| 2 | Touching the gate                       |        -2      |
| 3 | Surfacing                               |        5       |
|   | **Attempt Total**                       |        13      |

#### Example 2

 - Team launches AUV from starting zone.
 - AUV crosses the gate and completes the Navigation task.
 - AUV can't find the location of the next task and has to aborted and retreived by divers.

|   |                 Task                    |     Points     |
|---|:---------------------------------------:|:--------------:|
| 1 | Navigation Task                         |        10      |
|   | **Attempt Total**                       |        10      |


#### Example 3

 - Team launches AUV from starting zone.
 - AUV crosses the gate and completes the Navigation task.
 - AUV find the drums and successfully drops the ball in the <span style="color:blue">blue drum</span>, but touches the side of the wall momentarily while looking for the drum.
 - AUV tries to find the flare, but can't find it and has to be aborted and retreived by divers.

|   |                 Task                    |     Points     |
|---|:---------------------------------------:|:--------------:|
| 1 | Navigation Task                         |        10      |
| 2 | Target Acquisation Task (Visual)        |        30      |
| 3 | Touching the wall                       |        -5      |
|   | **Attempt Total**                       |        35      |


#### Example 3

 - Team launches AUV from starting zone.
 - AUV crosses the gate and completes the Navigation task.
 - AUV find the drums and successfully drops the ball in the <span style="color:blue">blue drum</span>.
 - AUV locates the flare and knocks off the golf ball.
 - AUV surfaces with run time of 400 seconds.

|   |                 Task                    |     Points     |
|---|:---------------------------------------:|:--------------:|
| 1 | Navigation Task                         |        10      |
| 2 | Target Acquisation Task (Visual)        |        30      |
| 3 | Localization Task                       |        40      |
| 4 | Surface Bonus                           |         5      |
| 5 | Run time Bonus                          |        15      |
|   | **Attempt Total**                       |        100     |

#### Example 4

 - Team launches AUV from starting zone.
 - AUV crosses the gate and completes the Navigation task.
 - AUV find the drums and successfully drops the ball in the <span style="color:blue">blue drum</span>.
 - AUV locates the flare and knocks off the golf ball.
 - AUV touches the bottom of the pool for more than 10 seconds while trying to find the target zone and gets automatically aborted by divers.

|   |                 Task                    |     Points     |
|---|:---------------------------------------:|:--------------:|
| 1 | Navigation Task                         |        10      |
| 2 | Target Acquisation Task (Visual)        |        30      |
| 3 | Localization Task                       |        40      |
|   | **Attempt Total**                       |        80      |

## Specification of AUV

### Size
- The AUV must fit within a 140 × 100 × 100 cm box.
- An AUV with dimension of less than 70 cm × 50 cm × 50 cm will be given bonus <span class="points"><strong>10 points</strong></span>.
- The AUV must not weigh more than 50 kg in air.
- An AUV weighing less than 40 kg in air will be given bonus <span class="points"><strong>10 points</strong></span>.

### Power
- Power must be self contained.
- **Tethers of any sort are not allowed**, except when [calibrating AUV sensors during practice rounds](#practice-rounds).
- The voltage of the power source used by each AUV must not exceed 24VDC.

### Safety
- AUVs must not leak and pollute the pool.
- AUVs must be designed and manufactured as to pose no danger of any kind to anyone or anything at the venue.
- AUVs **must have a kill switch** that turns off the vehicle, which is easily accessible to a diver. This must be marked in bright color.
- Pressure of any compressed gas used must not exceed **6 bars**.
AUV must be completely autonomous.
- The use of explosives, fire or hazardous chemicals is prohibited. Certified lithium batteries are allowed
- If lasers are used, they must be of class 2 or lower. Care must be taken to protect all persons at the venue from harm. Beams must be oriented in such a fashion that they cannot shine into the eyes of the spectators.

![flare](img/killswitch.jpg)
<div class="caption"> Figure 14. Example a kill switch on an AUV from 2015 Competition.</div>


### Communications
- No communication from/to the AUV of any sort is allowed during the game

## Game Procedure

### Sequence of events during the competition

- AUVs will undergo weight and size check. Bonus points, if applicable, will be awarded.
- AUVs will be tested for battery, oil or lubricant leak check, and a waterproofness check. Failing either would bar the team from attempting to qualify until the AUV passes the checks.
- AUVs will proceed to qualifying round. The bonus points for size and weight is applicable only if the AUV passes the qualifying round.
- The qualified AUVs will proceed for the final rounds of competition.

### Practice Rounds
- Teams will be allowed to practice in the main arena after they successfully complete the qualifying round, subject to availability of time slots and the schedule during the competition.
- No tethers are allowed at ANY time inside the main arena.
- Teams will be allowed calibrate their AUV sensors with tethers, at the edge of the pool, with the vehicle held **stationary**.

### Length of a game
- Each team is given **15 minutes** to complete the tasks.
- In any of the following cases, the game ends immediately.
  - Disqualification is announced in the game.
  - When the <span class="role">Judges</span> determine that the game cannot continue.
- Setting up of AUV
  - Five minutes is given for setting up the AUV before the game starts.
  - No more than two members of respective teams can engage in setting up of their AUV at the poolside.
  - The two designated members setting up must wear life jackets. Failure to do so may result in disqualification.
  - Any team that fails to complete setting their AUV within five minutes can resume the setting up again once the game starts.
  - Setting up during the game uses the allocated time for the tasks and game.
  - The AUV can only start from the start zone. This is the only place where the AUV is allowed to be on the water surface.
  - The AUV must start its maneuver only after it has **completely submerged** in the water.

### Retries
- A retry attempt can be made only after the <span class="role">Judges'</span> permission.
- The AUV will be passed to the two designated team members standing beside the pool by the divers.
- A retry would mean that the AUV starts from the start zone with 0 points.
- A maximum of 15 minutes is allowed including all the retries.
- The attempt with the highest score (including retries) will be considered for final scoring.

## Technical Presentation

- Teams have to make a 10 minutes presentation about their AUVs and their design and engineering process on the "seminar day" of the competition.
- The date and venue of the presentation will be confirmed 1 week before the competition.
- The presentation will be judged and a maximum of <span class="points"><strong>15 points</strong></span> can be earned towards the competition.
- There will be a 5 minutes Q&A session after the presentation.

### Presentation Rubrics

The presentation will be judged on the following rubrics <span class="points"><strong>3 points</strong></span> each).

- Timeliness (<= 10min)
- Technical Overview (for eg. Mechanical & Electronics & Software architecture of the AUV.)
- Design Innovation (for eg. Novel ideas/techniques you implemented in your AUV.)
- Challenges (for eg. Major challenges and how you overcame them.)
- What did we learn (for eg. Lessons learnt from the competition.)

## Certificate of Participation

- Teams whose AUVs successfully complete the qualifier round will receive Certificate of Participation.
- Teams whose video submissions have been accepted & attend the competition will receive a Certificate of Participation.
- Failing the above two criteria, no Certificate of Participation will be awarded.

## General Restrictions

- Team members are not allowed inside the swimming pool at any point during the game.
- Team members may not disturb the water surface once the game starts.
- Members of other teams are not allowed in the game area.
- Nobody is allowed to wear any footwear near the pool area.
- The <span class="role">Judges</span> may suspend the challenge if weather turns unfavorable.
- The pool area must be evacuated in case of lightning.

## Disqualification

- Oil or lubrication leak causing the pollution of pool.
- Battery leak causing the pollution of pool.
- The AUV damages or tries to damage the field, facilities or equipments.
- The team performs any acts that are not in the spirit of fair play.
- The team fails to obey instructions or warnings issued by the referees.
- If the team does not abide by the the general restrictions.

## Others

- The legitimacy of any actions not provided in this rulebook will be subject to discretion of the <span class="role">Judges</span>.
- The dimensions, weights, etc. of the field, facilities and equipments stated in this rulebook have a margin of error of ±5% unless otherwise stated. However the dimensions and weights of the AUVs as stated in the rule book are the maximum and cannot be deviated.
- The <span class="role">Judges</span> may demand additional explanations on safety issues when the safety of a vehicle is deemed to be in question.
