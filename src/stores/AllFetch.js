import {defineStore} from "pinia";

export const useAllFetchStore = defineStore({
    id: "allFetch",
    state: () => ({
        arr: [],
        sea_creatures: [],
        bugs: [],
        fossils: [],
        villagers: [],
        all: []
    }),
    actions: {
        async Fish() {
            let req = await fetch("https://acnhapi.com/v1a/fish");
            let res = await req.json();
            this.arr = res;
            this.all.push(res);
        },
        async SeaCreatures() {
            let req = await fetch("https://acnhapi.com/v1a/sea");
            let res = await req.json();
            this.sea_creatures = res;
            this.all.push(res);
        },
        async Bugs() {
            let req = await fetch("https://acnhapi.com/v1a/bugs");
            let res = await req.json();
            this.bugs = res;
            this.all.push(res);
        },
        async Fossils() {
            let req = await fetch("https://acnhapi.com/v1a/fossils");
            let res = await req.json();
            this.fossils = res;
            this.all.push(res);
        },
        async Villagers() {
            let req = await fetch("https://acnhapi.com/v1a/villagers");
            let res = await req.json();
            this.villagers = res;
            this.all.push(res);
        },
    }
});