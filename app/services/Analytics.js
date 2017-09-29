
 class Analytics{

    sendEvent = (eventName, eventData)=>{
        const date = new Date();
        ga('send', {
            hitType: 'event',
            eventCategory: eventName,
            eventAction: `${eventData} , ${date.getHours()}:${date.getMinutes()}` ,
            eventLabel: eventName
        });
    }

 };



let analytics = new Analytics();
export default analytics;