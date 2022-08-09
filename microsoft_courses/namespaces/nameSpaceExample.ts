namespace Greetings {
    export function returnGreetings(greetings: string): string {
        return "My greetings" + greetings;
    }
    export function lengthGreetings(message: string) {
        console.log(message.length)
    }
}

Greetings.returnGreetings("hi"); //My greetings hi
Greetings.lengthGreetings("hi"); //2
// returnGreetings("hi"); Error