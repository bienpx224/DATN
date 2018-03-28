var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
  entry: "./app/index.js", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    filename:"./assets/js/bundle.js",
    path:__dirname
  },

  resolve:{
    modules:[__dirname,'node_modules'],
    extensions: ['*','.jsx','.js','.json'],
    alias:{
      // reducer
      store : 'app/store.js',
      reducer : 'app/reducer/reducer.js',

      testReducer : 'app/reducer/test.js',
      userReducer : 'app/reducer/userReducer.js',
      followReducer : 'app/reducer/followReducer.js',
      postReducer : 'app/reducer/postReducer.js',
      // action
      testAction : 'app/action/test.js',
      followAction : 'app/action/followAction.js',
      userAction : 'app/action/userAction.js',
      postAction : 'app/action/postAction.js',
      // api
      apiUser: 'app/api/apiUser.js',

      //Components
      AppTest : 'components/App.js',
      Test : 'app/components/Test.js',
      App : 'app/components/App.js',
          // Popup
          PopupUser : 'app/components/Popup/PopupUser.js',
          PopupChangePicture : 'app/components/Popup/PopupChangePicture.js',
          // utilities
          InputComponent : 'app/components/Utilities/InputComponent.js',
          validateInfoUser:'app/components/Utilities/validateInfoUser.js',
          authenticated:'app/components/Utilities/authenticated.js',
          //  Layout
          Layout: 'app/components/Layout/Layout.js',
          Menu: 'app/components/Layout/Menu.js',
          Search: 'app/components/Layout/Search.js',
          // Homepage
          Home:'app/components/Homepage/Home.js',
          Homepage:'app/components/Homepage/Homepage.js',
          Login:'app/components/Homepage/Login.js',
          FormLoginReg :'app/components/Homepage/FormLoginReg.js',
          FormLogin:'app/components/Homepage/FormLogin.js',
          FormReg: 'app/components/Homepage/FormReg.js',
          //MenuLeft
          MenuLeft:'app/components/MenuLeft/MenuLeft.js',
          ChatList:'app/components/MenuLeft/components/ChatList.js',
          MenuVertical:'app/components/MenuLeft/components/MenuVertical.js',
          //Newsfeed
          Newsfeed:'app/components/Newsfeed/Newsfeed.js',
          NewsfeedContent:'app/components/Newsfeed/components/NewsfeedContent.js',
          Post:'app/components/Newsfeed/components/Post.js',
          //ChatRoom
          ChatRoom : 'app/components/ChatRoom/ChatRoom.js',
          MessageList : 'app/components/ChatRoom/components/MessageList.js',
          ChatMessage : 'app/components/ChatRoom/components/ChatMessage.js',
          //Profile
          IndexContent :'app/components/Profile/IndexContent.js',
          Profile : 'app/components/Profile/Profile.js',
          Information: 'app/components/Profile/components/Information.js',
          BasicInformation: 'app/components/Profile/components/BasicInformation.js',
          Timeline: 'app/components/Profile/components/Timeline.js',
          TimelineContent :'app/components/Profile/components/TimelineContent.js',
          ListFollowers:'app/components/Profile/components/ListFollowers.js',
          Follower: 'app/components/Profile/components/Follower.js',

    }
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    console:true
  },
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['react','es2015','stage-0']
        },
        test:/\.jsx?$/,    //file nao xu dung trong goi bundel
        exclude:/node_modules/ //ngoai tru khog su dung
      }
    ]
  }
};