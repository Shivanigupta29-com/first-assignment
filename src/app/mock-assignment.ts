import { Assignment } from './assignment/assignment';

export const ASSIGNMENT: Assignment[] = [
  { name: 'Methods of Primitives', key: 'MethodsOfPrimitives', description: 'JavaScript allows us to work with primitives' },
  { name: 'Numbers', key: 'Numbers', description: "Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. These are numbers that we’re using most of the time, and we’ll talk about them in this chapter." },
  { name: 'Strings', key: 'Strings', description: "In JavaScript, the textual data is stored as strings. There is no separate type for a single character." },
  { name: 'Arrays', description: "But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc." },
  { name: 'Array Method', description: "Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups." },
  { name: 'Iterables', description: "Iterable objects is a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop." },
  { name: 'Map and Set', description: "Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type." },
  { name: 'WeakMap and WeakSet', description: "As we know from the chapter Garbage collection, JavaScript engine stores a value in memory while it is reachable (and can potentially be used)." },
  { name: 'Object.Keys, Values, Entries', description: "Let’s step away from the individual data structures and talk about the iterations over them." },
  { name: 'Destructuring Assignment', description: "Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on." },
  { name: 'Introduction: Callbacks', description: "Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later." },
  { name: 'Promise', description: "To get some relief, you promise to send it to them when it’s published. You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t publish the song, they will still be notified." },
  { name: 'Promises chaining', description: "Let’s return to the problem mentioned in the chapter Introduction: callbacks: we have a sequence of asynchronous tasks to be performed one after another — for instance, loading scripts. How can we code it well?" },
  { name: 'Error hadling with promises', description: "Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice." },
  { name: 'Promise API', description: "There are 5 static methods in the Promise class. We’ll quickly cover their use cases here." },
  { name: 'Promisification', description: "Promisification” is a long word for a simple transformation. It’s the conversion of a function that accepts a callback into a function that returns a promise." }
];