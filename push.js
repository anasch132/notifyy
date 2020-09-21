var push = require('web-push')


let vapids = { publicKey:
    'BDdGWImd1IvW2TVdOt-2w4Pn3ldI9ZOBFBMWELbBdSQQLMgzfKVx9cpmvPbDCNVWn_uI7QfmU6koFfa76LNEUiQ',
   privateKey: 'IKGu8s6bwMZCC6ukOB6KMf4uod2IpD435PA9nzvNiyY' };





   push.setVapidDetails('mailto: anassech132@gmail.com' , vapids.publicKey, vapids.privateKey)

    let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dGcr3z72V7M:APA91bHGYG92bsNTPPdGadnpf4R4-gpCHkXQDhWWLjvrP4xtP2CJ0bE1x3bv7hm9CRTk3uOHuwCHPcaEfjx6W_BSyxE5Vcm0lxr0oX-KIcxNRHNiR5OYBpFYPxGBhwcsqshVDHYKXifD","expirationTime":null,"keys":{"p256dh":"BDgAbfoS4G-K0KBvz8JrQYogpCzBLe3zUUYTK-WHCIPtqXSrLIfj48NPLd58W39Xgl6VfiWX8lei7E2NAPKurEo","auth":"_ikXaj0PLMoL5CPkKPb1cw"}};

   push.sendNotification(sub)