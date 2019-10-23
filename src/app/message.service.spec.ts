import { MessageService } from "./message.service";

describe('message service',()=> {
    it('should be no messages to start',()=> {
        let service = new MessageService();
        expect(service.messages.length).toBe(0);
    })
    it('should be added a message when add is called',()=> {
        let service = new MessageService();
        service.add('message');
        expect(service.messages.length).toBe(1);
    })
    it('should be empty array when clear is called',()=> {
        let service = new MessageService();
        service.add('message');

        service.clear();
        
        expect(service.messages.length).toBe(0);
    })
})