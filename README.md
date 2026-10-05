# learning-nodejs

notes:

nodeJS creates event libraries
where first the event get registers and then the fallback get executed
In this way it handles multi threaded operation

Life cycle:

client request -> Server -> single threaded operation -> event loops (Faster callbacks) -> response

If in the case of longer fallbacks
the events are pushed in to waiting poll from there threads have handled and the callbacks have been sent back to the event loops and response back to the client
