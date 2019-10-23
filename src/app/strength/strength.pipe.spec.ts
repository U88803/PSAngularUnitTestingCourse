import { StrengthPipe } from "./strength.pipe";

describe('strength pipe test', () => {
    it('should return weak if input is 5', () => {
        //arrange
        let pipe = new StrengthPipe();
        //act
        let result = pipe.transform(5);
        //assert
        expect(result).toBe('5 (weak)');
    });
    
    it('should return strong if input is 15', () => {
        //arrange
        let pipe = new StrengthPipe();
        //act
        let result = pipe.transform(15);
        //assert
        expect(result).toBe('15 (strong)');
    });

    it('should return unbelievable if input is 25', () => {
        //arrange
        let pipe = new StrengthPipe();
        //act
        let result = pipe.transform(25);
        //assert
        expect(result).toBe('25 (unbelievable)');
    });
})