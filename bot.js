const { VK } = require('vk-io');
const { HearManager} = require('@vk-io/hear');
const vk = new VK({
    token:'5b4d67960c0d25e342bfca81fae9c53e975016c6ecfe22121ca3bd1afaa0873d306357868af25f0cb9d7a',
    pollingGroupId: 195233760,
    apiMode:'parallel'
})
const bot = new HearManager();
vk.updates.on('message_new', bot.middleware);
bot.hear(/^ начало$/i, msg => {
    msg.send('тест');
});
console.log('>_start bot');
vk.updates.start()catch(console.error);
