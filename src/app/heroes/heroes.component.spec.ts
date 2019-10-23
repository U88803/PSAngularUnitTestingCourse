import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('',()=>{
    let component: HeroesComponent;
    let mockService ;
    let heroes;
    beforeEach(()=> {
        heroes = [
            {id: 1, name:'Iron Man', strength: 19},
            {id: 2, name:'Doctor strange', strength: 10},
            {id: 3, name:'Captain America ', strength: 15}
        ];
        mockService = jasmine.createSpyObj(['addHero','deleteHero','getHeroes']);
        component = new HeroesComponent(mockService);
    })
    describe('delete', () => {
        it('should delete an entry from hero list when delete hero is called', ()=> {
            mockService.deleteHero.and.returnValue(of(true));
            component.heroes = heroes;

            component.delete(heroes[2]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero', ()=> {
            mockService.deleteHero.and.returnValue(of(true));
            component.heroes = heroes;

            component.delete(heroes[2]);

            expect(mockService.deleteHero).toHaveBeenCalledWith(heroes[2]);
        })
    })
})