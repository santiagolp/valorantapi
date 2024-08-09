const characters = [
    {
        id: 1,
        name: 'Viper'
    },
    {
        id: 2,
        name: 'Sage'
    },
    {
        id: 3,
        name: 'Breach'
    },
    {
        id: 4,
        name: 'Brimstone'
    },
    {
        id: 5,
        name: 'Omen'
    },
    {
        id: 6,
        name: 'Phoenix'
    },
    {
        id: 7,
        name: 'Raze'
    },
    {
        id: 8,
        name: 'Reyna'
    },
    {
        id: 9,
        name: 'Sova'
    },
    {
        id: 10,
        name: 'Cypher'
    },
    {
        id: 11,
        name: 'Killjoy'
    },
    {
        id: 12,
        name: 'Skye'
    },
    {
        id: 13,
        name: 'Yoru'
    },
    {
        id: 14,
        name: 'Astra'
    },
    {
        id: 15,
        name: 'Kay/o'
    }
];


const skills = [
    {
        id: 1,
        name: 'Poison Cloud',
        description: 'Equip a gas emitter. Fire to throw the emitter that perpetually remains throughout the round. Re-use the ability to create a toxic gas cloud at the cost of fuel. This ability can be re-used more than once and can be picked up to be redeployed.',
        characterId: 1
    },
    {
        id: 2,
        name: 'Toxic Screen',
        description: 'Equip a gas emitter launcher. Fire to deploy a long line of gas emitters. Re-use the ability to create a tall wall of toxic gas at the cost of fuel.',
        characterId: 1
    },
    {
        id: 3,
        name: 'Snake Bite',
        description: 'Equip a chemical launcher. Fire to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.',
        characterId: 1
    },
    {
        id: 4,
        name: 'Viper\'s Pit',
        description: 'Equip a chemical sprayer. Fire to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it. Hold the ability key to disperse the cloud early.',
        characterId: 1
    },
    {
        id: 5,
        name: 'Barrier Orb',
        description: 'Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter.',
        characterId: 2
    },
    {
        id: 6,
        name: 'Slow Orb',
        description: 'Equip a slowing orb. Fire to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.',
        characterId: 2
    },
    {
        id: 7,
        name: 'Healing Orb',
        description: 'Equip a healing orb. Fire with your crosshairs over a damaged ally to activate a heal-over-time on them. Alternate fire while Sage is damaged to activate a self heal-over-time.',
        characterId: 2
    },
    {
        id: 8,
        name: 'Resurrection',
        description: 'Equip a resurrection ability. Fire with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.',
        characterId: 2
    },
    {
        id: 9,
        name: 'Aftershock',
        description: 'Equip a fusion charge. Fire to deploy a slow-acting burst through a wall, the burst decays to a swift explosion along the way that damages and moves anything hit.',
        characterId: 3
    },
    {
        id: 10,
        name: 'Flashpoint',
        description: 'Equip a blinding charge. Fire to throw the charge, it detonates and blinds all players looking at it.',
        characterId: 3
    },
    {
        id: 11,
        name: 'Fault Line',
        description: 'Equip a seismic blast. Hold fire to increase the distance. Release to set off the quake, dazing all players in its zone and in a line up to the zone.',
        characterId: 3
    },
    {
        id: 12,
        name: 'Rolling Thunder',
        description: 'Equip a seismic charge. Fire to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.',
        characterId: 3
    },
    {
        id: 13,
        name: 'Stim Beacon',
        description: 'Equip a stim beacon. Fire to toss the stim beacon in front of Phoenix. Upon landing, the stim beacon will create a field that grants players rapid fire.',
        characterId: 6
    },
    {
        id: 14,
        name: 'Blaze',
        description: 'Equip a flame wall. Fire to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. Hold fire to bend the wall in the direction of your crosshair.',
        characterId: 6
    },
    {
        id: 15,
        name: 'Hot Hands',
        description: 'Equip a fireball. Fire to throw a fireball that explodes after a delay or upon impact with the ground, creating a lingering fire zone that damages enemies.',
        characterId: 6
    },
    {
        id: 16,
        name: 'Run It Back',
        description: 'Equip a tactical map. Fire to place a marker. While this ability is active, fragging out or dying will end this ability and bring you back to the marker with full health.',
        characterId: 6
    },
    {
        id: 17,
        name: 'Boom Bot',
        description: 'Equip a Boom Bot. Fire will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.',
        characterId: 7
    },
    {
        id: 18,
        name: 'Blast Pack',
        description: 'Instantly throw a Blast Pack that will stick to surfaces. Re-use the ability after deployment to detonate, launching anyone in its radius into the air.',
        characterId: 7
    },
    {
        id: 19,
        name: 'Paint Shells',
        description: 'Equip a cluster grenade. Fire to throw the grenade, which expands into numerous explosive fragments upon landing. The fragments damage players nearby.',
        characterId: 7
    },
    {
        id: 20,
        name: 'Showstopper',
        description: 'Equip a rocket launcher. Fire shoots a rocket that does massive area damage on contact with anything.',
        characterId: 7
    },
    {
        id: 21,
        name: 'Leer',
        description: 'Equip an ethereal, destructible eye. Activate to cast the eye a short distance forward. The eye will nearsight all players who look at it.',
        characterId: 8
    },
    {
        id: 22,
        name: 'Devour',
        description: 'Equip a soul orb. Fire to consume a nearby soul orb, rapidly healing for a short duration. Can be activated once more to detonate the soul, killing yourself and damaging nearby players.',
        characterId: 8
    },
    {
        id: 23,
        name: 'Dismiss',
        description: 'Equip a nearsight orb. Fire to throw the orb, it goes through walls. Upon landing, the nearsight orb nearsights all players looking at it.',
        characterId: 8
    },
    {
        id: 24,
        name: 'Empress',
        description: 'Equip to enter a frenzy. Fire to go in a straight line. The ability enhances Reyna\'s fire rate, equip and reload speeds substantially. Scoring a kill renews the duration.',
        characterId: 8
    },
    {
        id: 25,
        name: 'Shock Bolt',
        description: 'Equip a bow with a shock bolt. Fire to send the explosive bolt forward, detonating upon collision and damaging players nearby. Hold fire to extend the range of the projectile.',
        characterId: 9
    },
    {
        id: 26,
        name: 'Owl Drone',
        description: 'Equip an owl drone. Fire to deploy and take control of movement of the drone. While in control of the drone, fire to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
        characterId: 9
    },
    {
        id: 27,
        name: 'Recon Bolt',
        description: 'Equip a bow with recon bolt. Fire to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt.',
        characterId: 9
    },
    {
        id: 28,
        name: 'Hunter\'s Fury',
        description: 'Equip a bow with three long-range, wall-piercing energy blasts. Fire to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be re-used up to two more times while the ability timer is active.',
        characterId: 9
    },
    {
        id: 29,
        name: 'Trapwire',
        description: 'Equip a trapwire. Fire to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be re-deployed.',
        characterId: 10
    },
    {
        id: 30,
        name: 'Cyber Cage',
        description: 'Equip a cyber cage. Fire to toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it. Look at a trap and press USE to detonate it, creating a cage that renders nearby enemies immobile.',
        characterId: 10
    },
    {
        id: 31,
        name: 'Spycam',
        description: 'Equip a spycam. Fire to place the spycam at the targeted location. RE-USE the spycam to take control of the camera view. While in control of the camera, Fire to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
        characterId: 10
    },
    {
        id: 32,
        name: 'Neural Theft',
        description: 'Use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.',
        characterId: 10
    },
    {
        id: 33,
        name: 'Alarmbot',
        description: 'Equip an Alarmbot. Fire to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying nearsight to the enemy.',
        characterId: 11
    },
    {
        id: 34,
        name: 'Nanoswarm',
        description: 'Equip a Nanoswarm grenade. Fire to throw the grenade. Upon landing, the Nanoswarm goes covert. Activate the Nanoswarm to deploy a damaging swarm of nanobots.',
        characterId: 11
    },
    {
        id: 35,
        name: 'Turret',
        description: 'Equip a Turret. Fire to deploy a turret that fires at enemies in a 180 degree cone. Hold equip to recall the deployed turret.',
        characterId: 11
    },
    {
        id: 36,
        name: 'Lockdown',
        description: 'Equip the Lockdown device. Fire to deploy the device. After a long windup, the device detains all enemies caught in the radius. The device can be destroyed by enemies.',
        characterId: 11
    },
    {
        id: 37,
        name: 'Regrowth',
        description: 'Equip a healing trinket. Hold fire to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.',
        characterId: 12
    },
    {
        id: 38,
        name: 'Trailblazer',
        description: 'Equip a Tasmanian tiger trinket. Fire to send out and take control of the predator. While in control, Fire to leap forward, exploding in a concussive blast and damaging directly hit enemies.',
        characterId: 12
    },
    {
        id: 39,
        name: 'Guiding Light',
        description: 'Equip a hawk trinket. Fire to send it forward. Hold fire to guide the hawk in the direction of your crosshair. Re-use while the hawk is in flight to transform it into a flash.',
        characterId: 12
    },
    {
        id: 40,
        name: 'Seekers',
        description: 'Equip a Seeker trinket. Fire to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.',
        characterId: 12
    },
    {
        id: 41,
        name: 'Fakeout',
        description: 'Equip an echo that mimics footsteps when activated. Fire to activate and send the echo forward. Alt Fire to place an echo in place.',
        characterId: 13
    },
    {
        id: 42,
        name: 'Gatecrash',
        description: 'Equip to harness a rift tether. Fire to send the tether out moving forward. Alt Fire to place a tether in place. Activate to teleport to the tether\'s location.',
        characterId: 13
    },
    {
        id: 43,
        name: 'Blindside',
        description: 'Equip to rip an unstable dimensional fragment from reality. Fire to throw the fragment, activating a flash that winds up once it collides with a hard surface in the world.',
        characterId: 13
    },
    {
        id: 44,
        name: 'Dimensional Drift',
        description: 'Equip a mask that can see between dimensions. Fire to drift into Yoru\'s dimension, unable to be affected or seen by enemies from the outside.',
        characterId: 13
    },
    {
        id: 45,
        name: 'Nova Pulse',
        description: 'Equip a Star to throw a pulsing, explosive Star that detonates upon a brief delay, concussing all players who look at it.',
        characterId: 14
    },
    {
        id: 46,
        name: 'Gravity Well',
        description: 'Equip a Star to create a gravity well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.',
        characterId: 14
    },
    {
        id: 47,
        name: 'Nebula',
        description: 'Equip a Star to become a smokescreen that can be placed in front of Yoru, or thrown to activate a brief, brief vision block. The star is charged from the start of the round and can be re-used.',
        characterId: 14
    },
    {
        id: 48,
        name: 'Dissipate',
        description: 'Equip a Star to send it out, and shortly after reactivate to detonate, returning the star to Yoru, and blinding all players looking at it.',
        characterId: 14
    },
    {
        id: 49,
        name: 'Zero/Point',
        description: 'Equip a harness that creates a singularity. Fire to throw the harness, activating a star that pulls players in towards it. After a delay it explodes, making all players still trapped inside fragile.',
        characterId: 14
    },
    {
        id: 50,
        name: 'FRAG/ment',
        description: 'Equip an explosive fragment. Fire to throw the fragment, activating a flash that winds up once it collides with a hard surface in the world.',
        characterId: 15
    },
    {
        id: 51,
        name: 'FLASH/drive',
        description: 'Equip a flash grenade. Fire to throw the grenade, which will blind all players looking at it. Hold fire to curve the grenade with the input of your movement. Alternate fire to curve the grenade in the opposite direction.',
        characterId: 15
    },
    {
        id: 52,
        name: 'Null/cmd',
        description: 'Equip a suppression blade. Fire to throw the blade, activating a suppressive field that blocks vision and dampens audio. Alternate fire to aim in a straight line, then fire to throw. The blade can be re-used until the player runs out of charges.',
        characterId: 15
    },
];

export {
    characters,
    skills
}