## A small script to sms you when you push a new update to resin.io

## How it works

The script polls the resin.io app, querying by application name (`config.RESIN_APP`) it returns the applications commit hash. If this is different from the commit hash stored in memory `prevCommit` then it sends a text via twilio.

### Step 1:

`git clone https://github.com/craig-mulligan/SMSonUpdate`

### Step 2:

Signup with [twilio](https://www.twilio.com), get your TWILLIO_AUTHTOKEN, TWILLIO_AUTHTOKEN and Twillio phone number.
Insert twilio and resin credentials into `config.json`.

### Step 3:

`npm install && npm start`

### Test it out

Push a new update to you're resin.io application. And you should get a few logs and a new text message sent to your device.

```
Successfully authenticated with resin API
Hey! A new update was pushed to your resin.io application. commit:8b904747adb2948606180c94110f60c1b0299e78
Message Sent
```
