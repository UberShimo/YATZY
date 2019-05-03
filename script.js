Vue.use(Vuex);

//Bank of a lots of things
const store = new Vuex.Store({
    state: {
        total: 0,
        throws: 3,
        round: 0,
        //The 5 dices you play with
        dices: [
            {
                number: 1,
                locked: false,
                rollFix: false
            },
            {
                number: 1,
                locked: false,
                rollFix: false
            },
            {
                number: 1,
                locked: false,
                rollFix: false
            },
            {
                number: 1,
                locked: false,
                rollFix: false
            },
            {
                number: 1,
                locked: false,
                rollFix: false
            }
        ],
        //Storage of the points you gathered but also if score is viable
        scores: {
            ones: undefined,
            twos: undefined,
            threes: undefined,
            fours: undefined,
            fives: undefined,
            sixes: undefined,
            bonus: undefined,
            pair: undefined,
            twoPair: undefined,
            tripple: undefined,
            quad: undefined,
            littleStairs: undefined,
            bigStairs: undefined,
            house: undefined,
            chance: undefined,
            yatzy: undefined
        }
    },
    //Methods that give you the current worth of dice combinations
    getters:{
        ones: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            for(let i = 0; i < 5; i++){
                if(state.dices[i].number == 1){
                    v += 1;
                }
            }
            return v;
        },
        twos: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            for(let i = 0; i < 5; i++){
                if(state.dices[i].number == 2){
                    v += 2;
                }
            }
            return v;
        },
        threes: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            for(let i = 0; i < 5; i++){
                if(state.dices[i].number == 3){
                    v += 3;
                }
            }
            return v;
        },
        fours: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            for(let i = 0; i < 5; i++){
                if(state.dices[i].number == 4){
                    v += 4;
                }
            }
            return v;
        },
        fives: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            for(let i = 0; i < 5; i++){
                if(state.dices[i].number == 5){
                    v += 5;
                }
            }
            return v;
        },
        sixes: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            for(let i = 0; i < 5; i++){
                if(state.dices[i].number == 6){
                    v += 6;
                }
            }
            return v;
        },
        bonus: function(state){
            if(state.scores.ones + state.scores.twos + state.scores.threes + state.scores.fours + state.scores.fives + state.scores.sixes >= 63){
                return 50;
            }
            else{
                return 0;
            }
        },
        pair: function(state){
            //i = 5 because 5 is the amount of dices
            let counter = 0;

            for(let check = 6; check > 0; check--){
                for(let i = 0; i < 5; i++){
                    if(state.dices[i].number == check){
                        counter++;
                        if(counter == 2){
                            return check * 2;
                        }
                    }
                }
                counter = 0;
            }
            return 0;
        },
        twoPair: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            let counter = 0;
            let pairs = 0;

            for(let check = 6; check > 0; check--){
                for(let i = 0; i < 5; i++){
                    if(state.dices[i].number == check){
                        counter++;
                        if(counter == 2){
                            v += check * 2;
                            pairs++;
                            counter = 0;
                            break;
                        }
                    }
                }
                counter = 0;
            }

            if(pairs == 2){
                return v;
            }
            return 0;
        },
        tripple: function(state){
            //i = 5 because 5 is the amount of dices
            let counter = 0;

            for(let check = 6; check > 0; check--){
                for(let i = 0; i < 5; i++){
                    if(state.dices[i].number == check){
                        counter++;
                        if(counter == 3){
                            return check * 3;
                        }
                    }
                }
                counter = 0;
            }
            return 0;
        },
        quad: function(state){
            //i = 5 because 5 is the amount of dices
            let counter = 0;

            for(let check = 6; check > 0; check--){
                for(let i = 0; i < 5; i++){
                    if(state.dices[i].number == check){
                        counter++;
                        if(counter == 4){
                            return check * 4;
                        }
                    }
                }
                counter = 0;
            }
            return 0;
        },
        littleStairs: function(state){
            //i = 5 because 5 is the amount of dices
            for(let i = 0; i < 5; i++){
                if(state.dices[i].number == 1){
                    for(let i = 0; i < 5; i++){
                        if(state.dices[i].number == 2){
                            for(let i = 0; i < 5; i++){
                                if(state.dices[i].number == 3){
                                    for(let i = 0; i < 5; i++){
                                        if(state.dices[i].number == 4){
                                            for(let i = 0; i < 5; i++){
                                                if(state.dices[i].number == 5){
                                                    return 15;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return 0;
        },
        bigStairs: function(state){
            //i = 5 because 5 is the amount of dices
            for(let i = 0; i < 5; i++){
                if(state.dices[i].number == 2){
                    for(let i = 0; i < 5; i++){
                        if(state.dices[i].number == 3){
                            for(let i = 0; i < 5; i++){
                                if(state.dices[i].number == 4){
                                    for(let i = 0; i < 5; i++){
                                        if(state.dices[i].number == 5){
                                            for(let i = 0; i < 5; i++){
                                                if(state.dices[i].number == 6){
                                                    return 20;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return 0;
        },
        house: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            let counter = 0;
            let tripple = false;
            let pair = false;
            let valueOfTripple = 0;

            for(let check = 6; check > 0; check--){
                for(let i = 0; i < 5; i++){
                    if(state.dices[i].number == check){
                        counter++;
                        if(counter == 3){
                            v += check * 3;
                            valueOfTripple = check;
                            tripple = true;
                            counter = 0;
                            break;
                        }
                    }
                }
                counter = 0;
            
                if(tripple){
                    break;
                }
            }

            if(tripple){
                for(let check = 6; check > 0; check--){
                    for(let i = 0; i < 5; i++){
                        if(state.dices[i].number == check && state.dices[i].number != valueOfTripple){
                            counter++;
                            if(counter == 2){
                                v += check * 2;
                                pair = true;
                                counter = 0;
                                break;
                            }
                        }
                    }
                    counter = 0;
            
                    if(pair){
                        break;
                    }
                }
            }

            if(tripple && pair){
                return v;
            }
            else{
                return 0;
            }
        },
        chance: function(state){
            //i = 5 because 5 is the amount of dices
            let v = 0;
            for(let i = 0; i < 5; i++){
                v += state.dices[i].number;
            }
            return v;
        },
        yatzy: function(state){
            if(state.dices[1].number == state.dices[0].number){
                if(state.dices[2].number == state.dices[0].number){
                    if(state.dices[3].number == state.dices[0].number){
                        if(state.dices[4].number == state.dices[0].number){
                            return 50;
                        }
                    }
                }
            }
            else{
                return 0;
            }
        }
    },
    mutations:{
        //Rolls the dices
        roll(state, mutations){
            //i = 5 because 5 is the amount of dices
            //rollFix makes the opacity of the dice 0 (invisible)
            for(let i = 0; i < 5; i++){
                if(!state.dices[i].locked){
                    state.dices[i].rollFix = true;
                }
            }
            //Make the site "pause" while the CSS opacity effect is working
            setTimeout(f => {
                for(let i = 0; i < 5; i++){
                    if(!state.dices[i].locked){
                        state.dices[i].rollFix = false;
                    }
                }
                for(let i = 0; i < 5; i++){
                    if(!state.dices[i].locked){
                        state.dices[i].number = Math.floor((Math.random() * 6) + 1);
                    }
                }
            }, 400);
        },
        //Lock the dice you pressed
        lockDice(state, index){
            state.dices[index].locked = !state.dices[index].locked;
        }
    }
});

//The component handles 5 dices
Vue.component("dice-holder", {
    props:["dice", "index"],
    template: `
        <div
            class="dice"
            v-on:click="lockDice(index)"
            v-bind:class='{
                dice1: dice.number == 1,
                dice2: dice.number == 2,
                dice3: dice.number == 3,
                dice4: dice.number == 4,
                dice5: dice.number == 5,
                dice6: dice.number == 6,
                locked: this.$store.state.dices[index].locked,
                rollFix: dice.rollFix
            }'
        ></div>
    `,
    methods: {
        lockDice(index){
            if(store.state.throws < 3){
                this.$store.commit("lockDice", index)
            }
        }
    }
})

var app = new Vue({
    el: "#app",
    store,
    computed: {
        //returns the dices array
        getDices(){
            return this.$store.state.dices;
        }
    },
    methods:{
        throwDices(){
            if(store.state.throws > 0){
                store.commit("roll");
                store.state.throws--;
            }
        },
        unlockDices(){
            //i = 5 because 5 is the amount of dices
            for(let i = 0; i < 5; i++){
                store.state.dices[i].locked = false;
            }
            store.state.round++;
        },
        checkBonus(){
            if(store.state.scores.bonus == undefined){
                if(store.getters.bonus == 50){
                    store.state.scores.bonus = 50;
                    store.state.total += 50;
                }
            }
        },
        //Refresh the page hehe
        restart(){
            location.reload();
        },
        chooseOnes(){
            if(store.state.throws < 3 && store.state.scores.ones == undefined){
                store.state.scores.ones = store.getters.ones;
                store.state.total += store.getters.ones;
                store.state.throws = 3;
                this.unlockDices();
                this.checkBonus();
            }
        },
        chooseTwos(){
            if(store.state.throws < 3 && store.state.scores.twos == undefined){
                store.state.scores.twos = store.getters.twos;
                store.state.total += store.getters.twos;
                store.state.throws = 3;
                this.unlockDices();
                this.checkBonus();
            }
        },
        chooseThrees(){
            if(store.state.throws < 3 && store.state.scores.threes == undefined){
                store.state.scores.threes = store.getters.threes;
                store.state.total += store.getters.threes;
                store.state.throws = 3;
                this.unlockDices();
                this.checkBonus();
            }
        },
        chooseFours(){
            if(store.state.throws < 3 && store.state.scores.fours == undefined){
                store.state.scores.fours = store.getters.fours;
                store.state.total += store.getters.fours;
                store.state.throws = 3;
                this.unlockDices();
                this.checkBonus();
            }
        },
        chooseFives(){
            if(store.state.throws < 3 && store.state.scores.fives == undefined){
                store.state.scores.fives = store.getters.fives;
                store.state.total += store.getters.fives;
                store.state.throws = 3;
                this.unlockDices();
                this.checkBonus();
            }
        },
        chooseSixes(){
            if(store.state.throws < 3 && store.state.scores.sixes == undefined){
                store.state.scores.sixes = store.getters.sixes;
                store.state.total += store.getters.sixes;
                store.state.throws = 3;
                this.unlockDices();
                this.checkBonus();
            }
        },
        choosePair(){
            if(store.state.throws < 3 && store.state.scores.pair == undefined){
                store.state.scores.pair = store.getters.pair;
                store.state.total += store.getters.sixes;
                store.state.throws = 3;
                this.unlockDices();
            }
        },
        chooseTwoPair(){
            if(store.state.throws < 3 && store.state.scores.twoPair == undefined){
                store.state.scores.twoPair = store.getters.twoPair;
                store.state.total += store.getters.twoPair;
                store.state.throws = 3;
                this.unlockDices();
            }
        },
        chooseTripple(){
            if(store.state.throws < 3 && store.state.scores.tripple == undefined){
                store.state.scores.tripple = store.getters.tripple;
                store.state.total += store.getters.tripple;
                store.state.throws = 3;
                this.unlockDices();
            }
        },
        chooseQuad(){
            if(store.state.throws < 3 && store.state.scores.quad == undefined){
                store.state.scores.quad = store.getters.quad;
                store.state.total += store.getters.quad;
                store.state.throws = 3;
                this.unlockDices();
            }
        },
        chooseLittleStairs(){
            if(store.state.throws < 3 && store.state.scores.littleStairs == undefined){
                store.state.scores.littleStairs = store.getters.littleStairs;
                store.state.total += store.getters.littleStairs;
                store.state.throws = 3;
                this.unlockDices();
            }
        },
        chooseBigStairs(){
            if(store.state.throws < 3 && store.state.scores.bigStairs == undefined){
                store.state.scores.bigStairs = store.getters.bigStairs;
                store.state.total += store.getters.bigStairs;
                store.state.throws = 3;
                this.unlockDices();
            }
        },
        chooseHouse(){
            if(store.state.throws < 3 && store.state.scores.house == undefined){
                store.state.scores.house = store.getters.house;
                store.state.total += store.getters.house;
                store.state.throws = 3;
                this.unlockDices();
            }
        },
        chooseChance(){
            if(store.state.throws < 3 && store.state.scores.chance == undefined){
                store.state.scores.chance = store.getters.chance;
                store.state.total += store.getters.chance;
                store.state.throws = 3;
                this.unlockDices();
            }
        },
        chooseYatzy(){
            if(store.state.throws < 3 && store.state.scores.yatzy == undefined){
                store.state.scores.yatzy = store.getters.yatzy;
                store.state.total += store.getters.yatzy;
                store.state.throws = 3;
                this.unlockDices();
            }
        }
    }
});