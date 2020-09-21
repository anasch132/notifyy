self.addEventListener('push', function(event) {

    var options = {
        body: "this is a test", 
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(), 
            primaryKey: '2'
        },
        actions: [
            {
                actions: 'explore',
                title: "try this new",
                icon: "https://www.onlygfx.com/wp-content/uploads/2017/12/grunge-yes-no-icon-1-902x1024.png"
            },
            {
                action: 'close',
                title: "try it out",
                icon: 'https://www.onlygfx.com/wp-content/uploads/2017/12/grunge-yes-no-icon-1-902x1024.png' 

            }
        ]
    };
    event.waitUntil(
       await self.ServiceWorkerRegistration.showNotification('hey mom', options)
    );
  }); 