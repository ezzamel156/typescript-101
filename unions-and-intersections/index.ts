enum UserEventType {
    USER_DELETED,
    USER_CREATED,
}

// imagine deleted event gives id only but created gives id, name, email
const userDeletedEvent = {
    eventType: UserEventType.USER_DELETED,
    parameters: {
        id: '1'
    }
}

const userCreatedEvent = {
    eventType: UserEventType.USER_CREATED,
    parameters: {
        id: '2',
        name: 'Mel',
        email: 'lol@gmail.com'
    }
}

// Bad way to handle this scenario
interface BadUserEvent {
    eventType: UserEventType,
    parameters: {
        id: string,
        name?: string,
        email?: string,
    }
}

// typescript cannot see error
const handleUserEvent = (userEvent: BadUserEvent) => {
    if(userEvent.eventType === UserEventType.USER_CREATED) {
        console.log(userEvent.parameters.name);
        return;
    }

    if(userEvent.eventType === UserEventType.USER_DELETED) {
        // we know this is impossible yet the behavior is not enforced by typescript
        console.log(userEvent.parameters.email?.toUpperCase());
        return;
    }
}
handleUserEvent(userDeletedEvent);

// better way
interface UserCreatedEvent {
    eventType: UserEventType.USER_CREATED,
    parameters: {
        id: string,
        name: string,
        email: string,
    }
}

interface UserDeletedEvent {
    eventType: UserEventType.USER_DELETED,
    parameters: {
        id: string
    }
}

type GoodUserEvent = UserCreatedEvent | UserDeletedEvent;

const handleGoodUserEvent = (event: GoodUserEvent) => {
    if(event.eventType === UserEventType.USER_CREATED) {
        console.log(event.parameters.name);
        return;
    }

    if(event.eventType === UserEventType.USER_DELETED) {
        console.log(event.parameters.email.toUpperCase());
        return;
    }
}

