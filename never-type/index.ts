/**
 * Example of a use case for never type which is to give compile time error for unhandle cases
 * when we are discriminationg unions
 */

enum UserEventType {
    USER_DELETED,
    USER_CREATED,
    USER_UPDATED,
}

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

interface UserUpdatedEvent {
    eventType: UserEventType.USER_UPDATED,
    parameters: {
        id: string
    }
}

const unreachableCaseError = (x: never): never => {
    throw Error(x);
};

type GoodUserEvent = UserCreatedEvent | UserDeletedEvent | UserUpdatedEvent;

const handleGoodUserEvent = (event: GoodUserEvent) => {
    if(event.eventType === UserEventType.USER_CREATED) {
        console.log(event.parameters.name);
        return;
    }

    if(event.eventType === UserEventType.USER_DELETED) {
        console.log(event.parameters.id);
        return;
    }

    if(event.eventType === UserEventType.USER_UPDATED) {
        console.log(event.parameters.id);        
        return;
    }

    unreachableCaseError(event);
}