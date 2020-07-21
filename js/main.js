//declaration
const chat_menu = document.querySelector('.menu');
const cancel_chatbot = document.querySelector('.chat-header .fa-close');
const message_body = document.querySelector('.message-body');
const chatbot_icon = document.querySelector('.chat-bot-icon');
const message = document.querySelector('.send-key');
const input_message = document.querySelector('.enter-message');
const close_chat_with_icon = document.querySelector('.chat-bot-icon-close');
const call_customer_care = document.querySelector('.give-call');
const end_ai_chat = document.querySelector('.end-chat');
const talk_with_human = document.querySelector('.talk-with-human');
const emoji_input = document.querySelector('.input-emoji');
const cancel_emoji = document.querySelector('.emoji-header .fa-close');
const emoji_body = document.querySelector('.emoji-body');
//emoji array
const emoji_list = ['😀','😃','😄','😁','😆','😅','😂','🤣','😇','🙃','😉','🙂','😍','😌','😘','😗','😙','😚','😋','😛','😝','😜','😠','😤','😭','😢','😩','😖','😣','🙁','😔','😕',
    '😒','😏','😎','🤓','😳','😰','😱','🤗','🤔','🤥','😬','😲','🙄','😵','🤐','🤧','😷','🤑','🤠','😈','👿','👹','👺','🤡','💩','👻','☠','💀','👾','🤖','🎃','😻','😽','🙀','👐','🙌','👏','🤝','👍',
    '👎','👊','✊','🤛','🤜','🤞','✌','🤘','👌','👈','👉','👆','👇','☝','✋','🤚','🖐','🖖','👋','🤙','🤙','💪','🖕','✍','🙏','💄','💋','👄','👅','👂','👃','👣','👁','👀','🗣','👤','👥','👧',
    '🤦','‍♀','️🤷‍','♂','🤷','‍♀','💇','💆','‍♂','💃','🏃','👩','👩','👧','👦','👨‍','❤','👨','👚','👖','👕','👔','👗','👙','👘','👡','👠','👢','👞','👟','🌂','🕶','👓','🎒','💼','👜','👝','💍','👑','🎓','👒','🎩'
     ];

// begining of functions 
function toggle_chatbot_menu(){ //contols the menu display
    const chat_menu_content = document.querySelector('.menu-content');
    chat_menu_content.classList.toggle('show-chatbot-menu-content');
    chat_menu.classList.toggle('menu-active');
    document.querySelector('.customer-care-num').style.display = 'none';
}
function remove_chatbot(){ //hides the chatbot
    const chatbot = document.querySelector('.chat-body');
    const chat_menu_content = document.querySelector('.menu-content');
    chatbot.style.display = 'none';
    chatbot_icon.style.display = 'block';
    close_chat_with_icon.style.display = 'none';
    if(chat_menu_content.classList.contains('show-chatbot-menu-content' == true)){
      chat_menu_content.classList.toggle('show-chatbot-menu-content');
  }
  if(chat_menu.classList.contains('menu-active') == true){
    chat_menu.classList.toggle('menu-active');
  }
  document.querySelector('.customer-care-num').style.display = 'none';
  close_emoji();
}
function show_chatbot(){ //displays the chatbot
    const chatbot = document.querySelector('.chat-body');
    chatbot.style.display = 'block';
    chatbot_icon.style.display = 'none';
    close_chat_with_icon.style.display = 'block';
    document.querySelector('.chat_icon_tooltip').style.display = 'none';
    input_message.focus();
}
function send_humans_chat(){ //controls the message sent by the user 
    const human_message = document.querySelector('.enter-message');
    const message_holder = document.querySelector('.message-holder');
    if(human_message.value != ''){
       const sender_message = document.createElement('div');
            sender_message.className = 'sender-message';
            sender_message.innerHTML = human_message.value;
            message_holder.appendChild(sender_message);  
            post_message(human_message.value );
            human_message.value = '';
            updateScroll(message_holder);
            close_emoji();
        }
}
function get_ai_chat(receive_message){ //gets the message sent by the ai
    const ai_message = document.createElement('div');
    const message_holder = document.querySelector('.message-holder');
    ai_message.className = 'ai-message';
    ai_message.innerHTML = receive_message;
    message_holder.appendChild(ai_message);  
    updateScroll(message_holder);
}
function updateScroll(el){ //helps to scroll base on the given parameter
    el.scrollTop = el.scrollHeight;
  }
function display_human_message_box(){ 
    const human_message_box = document.querySelector('#tawk');
    const chatbot_cover = document.querySelector('.chat-bot');
    human_message_box.style.display = 'block';
    chatbot_cover.style.display = 'none';
    toggle_chatbot_menu();
}
function close_emoji(){ // closes the emoji menu
    const emoji_container = document.querySelector('.emoji-container');
    emoji_container.style.height = '0px';
}
function open_emoji(){  //open the emoji menu
    const emoji_container = document.querySelector('.emoji-container');
    if( emoji_container.style.height == '190px'){
        emoji_container.style.height = '0px';
    }else{
        emoji_container.style.height = '190px';
    }
    emoji_body.scrollTo(0, 0);
}
function create_emoji(){ //creates the emoji's and add to the container
    const emoji_body = document.querySelector('.emoji-body');
    for(let num = 0; num < emoji_list.length; num++){
        const emoji = document.createElement('a');
            emoji.className = 'emoji-button';
            emoji.innerHTML = emoji_list[num];
            emoji_body.appendChild(emoji);    
    }
}
function add_emoji(e){ //add the the emoji to input field
    let human_input = document.querySelector('.enter-message');
    if (e.target !== e.currentTarget) {
        if(e.target.className == 'emoji-button'){
            human_input.value = human_input.value + e.target.innerHTML;
            input_message.focus();
        }
    }
}
//ending of function

//begining of event listeners
document.addEventListener('DOMContentLoaded',function() {
create_emoji();
cancel_chatbot.addEventListener('click', remove_chatbot);
chat_menu.addEventListener('click',toggle_chatbot_menu);
message_body.addEventListener('click', function(){
    const chat_menu_content = document.querySelector('.menu-content');
      if(chat_menu_content.classList.contains('show-chatbot-menu-content')){
        toggle_chatbot_menu();
        close_emoji();
    }
 });
chatbot_icon.addEventListener('click', show_chatbot);
close_chat_with_icon.addEventListener('click', remove_chatbot);
message.addEventListener('click', send_humans_chat);
input_message.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();

    if (event.keyCode === 13) {
      // Trigger the button element
      send_humans_chat();
    }
  });
chatbot_icon.addEventListener('mouseover', function(){
    document.querySelector('.chat_icon_tooltip').style.display = 'block';
});
chatbot_icon.addEventListener('mouseout', function(){
    document.querySelector('.chat_icon_tooltip').style.display = 'none';
 });
 call_customer_care.addEventListener('click', function(){
     document.querySelector('.customer-care-num').style.display = 'block';
 });
 end_ai_chat.addEventListener('click', function(){
     post_message('bye!');
     toggle_chatbot_menu();
 });
 talk_with_human.addEventListener('click', display_human_message_box);
 emoji_input.addEventListener('click', open_emoji);
 cancel_emoji.addEventListener('click', close_emoji);
 emoji_body.addEventListener('click', add_emoji);
 document.querySelector('.message-holder').addEventListener('click',close_emoji);
});
//ending of event listeners

//ajax call function

function post_message(message) {
    
    $.ajax({
        data : {'userinp' : message},
        type : 'POST',
        url : 'https://customercare.pythonanywhere.com/api/chat', 
        header: 'Access-Control-Allow-Origin: *',
        error : function(){
            get_ai_chat('sorry, cant respond nw because am currently offline');
        }
    })
    .done(function(data) {

        if (data.error) {
            console.log('error during ajax request');
        } else {
            get_ai_chat(data.chatresponse);
        }
});
}

