
# Atlas SMS Gateway Node.js Client
> JavaScript client for Atlas SMS API service

## Installation

```bash
npm install atlas-sms-gateway-node
```

## Usage

```javascript
var Atlas = require('atlas-sms-gateway-node');

var atlas = new Atlas("YOUR_JUSIBE_PUBLIC_KEY", "YOUR_JUSIBE_ACCESS_TOKEN");

```


### Send SMS
```javascript

var payload = {
  to: '+2507XXXXXXXX‬',
  sender: 'XXXXXXXXXX',
  content: 'Hello From the other side 😎\nI must have called a thousand times.'
};

atlas.sendSMS(payload)
  .then(res => {
    console.log(res.body);
  })
  .catch(err => {
    console.log(err.body);
  });

```

## License

Available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

