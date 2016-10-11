webpackJsonp([2,0],[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var s=n(10),a=r(s),o=n(52),i=r(o),u=n(13),c=r(u);new a["default"]({el:"#app",store:c["default"],render:function(e){return e(i["default"])}})},,,,,,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.runningGame=function(e){return e.runningGame},t.winnerName=function(e){return e.players[e.runningGame.winner].name},t.gameHistory=function(e){return e.gameHistory},t.playerOne=function(e){return e.players.playerOne},t.playerTwo=function(e){return e.players.playerTwo}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),o=s(a),i=n(11),u=s(i),c=n(12),l=r(c);o["default"].use(u["default"]);var d={players:{playerOne:{name:"Player1",bummerl:0},playerTwo:{name:"Player2",bummerl:0}},runningGame:{winner:null,schneider:!1,playerOneScores:[7],playerTwoScores:[7],scoreHistory:[]},gameHistory:[]},p={decrementScore:function(e,t){var n=e.runningGame[t.player][e.runningGame[t.player].length-1],r=n-t.amount;p.handleScoreHistory(e,t.player),e.runningGame[t.player].push(r<0?0:r)},handleScoreHistory:function(e,t){e.runningGame.scoreHistory.push(t)},endGame:function(e,t){var n=1;7!==e.runningGame.playerOneScores[e.runningGame.playerOneScores.length-1]&&7!==e.runningGame.playerTwoScores[e.runningGame.playerTwoScores.length-1]||(n=2,e.runningGame.schneider=!0),e.players[t.loser].bummerl+=n,e.runningGame.winner=t.winner},startNewGame:function(e){e.gameHistory.push(e.runningGame),p.restartGame(e)},restartGame:function(e){e.runningGame={winner:null,schneider:!1,playerOneScores:[7],playerTwoScores:[7],scoreHistory:[]}},undoPlayerScore:function(e,t){e.runningGame[e.runningGame.scoreHistory.pop()].pop()}};t["default"]=new u["default"].Store({state:d,mutations:p,getters:l})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(53),a=r(s);t["default"]={components:{Game:a["default"]}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(56),a=r(s);t["default"]={components:{SingleSchnapser:a["default"]}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["gameHistory","playerOneName","playerTwoName"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["scores","player","gameRunning","editMode","canUndo"],methods:{decrementScore:function(e){this.$emit("decrementScore",e)},undo:function(){this.$emit("undo")}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(20),a=r(s),o=n(55),i=r(o),u=n(54),c=r(u),l=n(11);t["default"]={components:{Player:i["default"],History:c["default"]},data:function(){return{gameRunning:!0,editMode:!1,showHistory:!1}},computed:(0,a["default"])({},(0,l.mapGetters)(["runningGame","winnerName","gameHistory","playerOne","playerTwo"]),{canUndoPlayerOne:function(){return this.canUndo("playerOneScores")},canUndoPlayerTwo:function(){return this.canUndo("playerTwoScores")}}),methods:{decrementPlayerOneScores:function(e){this.$store.commit("decrementScore",{player:"playerOneScores",amount:e}),this.runningGame.playerOneScores[this.runningGame.playerOneScores.length-1]<=0&&this.finishGame("playerTwo","playerOne")},decrementPlayerTwoScores:function(e){this.$store.commit("decrementScore",{player:"playerTwoScores",amount:e}),this.runningGame.playerTwoScores[this.runningGame.playerTwoScores.length-1]<=0&&this.finishGame("playerOne","playerTwo")},finishGame:function(e,t){this.gameRunning=!1,this.$store.commit("endGame",{loser:e,winner:t})},startNewGame:function(){this.$store.commit("startNewGame"),this.gameRunning=!0},restartGame:function(){this.$store.commit("restartGame"),this.gameRunning=!0},canUndo:function(e){var t=this.runningGame.scoreHistory,n=t.length;return n>0&&t[n-1]===e},undoPlayerOne:function(){this.undo("playerOneScores")},undoPlayerTwo:function(){this.undo("playerTwoScores")},undo:function(e){this.$store.commit("undoPlayerScore",{player:e})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){var r,s;n(48),r=n(14);var a=n(57);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,t,n){var r,s;r=n(15);var a=n(58);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,t,n){var r,s;n(51),r=n(16);var a=n(61);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,t,n){var r,s;n(50),r=n(17);var a=n(60);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,t,n){var r,s;n(49),r=n(18);var a=n(59);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=r},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("game")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"game"},[_h("single-schnapser")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"single-schnapser"},[editMode||showHistory?_e():_h("div",{staticClass:"btn-group btn-group-justified",attrs:{role:"group"}},[_h("div",{staticClass:"btn-group btn-group-xs",attrs:{role:"group"}},[_h("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){editMode=!0}}},[_m(0)," Player Names\n      "])])," ",_h("div",{staticClass:"btn-group btn-group-xs",attrs:{role:"group"},on:{click:function(e){showHistory=!0}}},[_m(1)])," ",_h("div",{staticClass:"btn-group btn-group-xs",attrs:{role:"group"},on:{click:restartGame}},[_m(2)])])," ",editMode?_h("div",[_h("button",{staticClass:"btn btn-success btn-block btn-xs",attrs:{disabled:""===playerOne.name||""===playerTwo.name},on:{click:function(e){editMode=!1}}},[_m(3)," Done\n    "])]):_e()," ",showHistory?_h("div",[_h("button",{staticClass:"btn btn-success btn-block btn-xs",attrs:{disabled:""===playerOne.name||""===playerTwo.name},on:{click:function(e){showHistory=!1}}},[_m(4)," Back\n    "])]):_e()," ",_h("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[showHistory?_h("history",{attrs:{gameHistory:gameHistory,playerOneName:playerOne.name,playerTwoName:playerTwo.name}}):_h("div",{staticClass:"players"},[_h("player",{staticClass:"player1",attrs:{scores:runningGame.playerOneScores,player:playerOne,gameRunning:gameRunning,editMode:editMode,canUndo:canUndoPlayerOne},on:{decrementScore:decrementPlayerOneScores,undo:undoPlayerOne}})," ",_h("player",{staticClass:"player2",attrs:{scores:runningGame.playerTwoScores,player:playerTwo,gameRunning:gameRunning,editMode:editMode,canUndo:canUndoPlayerTwo},on:{decrementScore:decrementPlayerTwoScores,undo:undoPlayerTwo}})])," "])," ",gameRunning?_e():_h("div",{staticClass:"new"},[runningGame.schneider?_h("h4",[_m(5)]):_e()," ",_h("h4",[_h("b",[_s(winnerName)])," hat gewonnen!"])," ",_h("button",{staticClass:"btn btn-success",on:{click:startNewGame}},["neues Bummerl"])])])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:"fa fa-pencil-square-o fa-lg"})},function(){with(this)return _h("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[_h("i",{staticClass:"fa fa-book fa-lg"})," History\n      "])},function(){with(this)return _h("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[_h("i",{staticClass:"fa fa-undo fa-lg"})," Restart Bummerl\n      "])},function(){with(this)return _h("i",{staticClass:"fa fa-check fa-lg"})},function(){with(this)return _h("i",{staticClass:"fa fa-arrow-left fa-lg"})},function(){with(this)return _h("b",["Schneider!"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"player"},[_h("div",{staticClass:"player-header"},[_h("h4",{staticClass:"player-bummerl"},[_s(player.bummerl)])," ",editMode?_h("input",{directives:[{name:"model",value:player.name,expression:"player.name"}],staticClass:"form-control input-sm player-name-input",domProps:{value:_s(player.name)},on:{input:function(e){e.target.composing||(player.name=e.target.value)}}}):_h("h4",{staticClass:"player-name"},[_s(player.name)])," "])," ",_h("div",{staticClass:"scores"},[_l(scores,function(e){return _h("p",{staticClass:"h4"},[_s(e)])})])," ",gameRunning?_h("div",{staticClass:"score-buttons"},[_h("div",{staticClass:"btn-group btn-group-justified",attrs:{role:"group"}},[_h("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[_h("button",{staticClass:"btn btn-success",attrs:{disabled:editMode},on:{click:function(e){decrementScore(3)}}},["3er"])])," ",_h("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[_h("button",{staticClass:"btn btn-success",attrs:{disabled:editMode},on:{click:function(e){decrementScore(2)}}},["2er"])])," ",_h("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[_h("button",{staticClass:"btn btn-success",attrs:{disabled:editMode},on:{click:function(e){decrementScore(1)}}},["1er"])])])," ",canUndo?_h("button",{staticClass:"btn btn-default btn-sm btn-block",attrs:{type:"button"},on:{click:undo}},[_m(0)," Undo\n    "]):_e()]):_e()])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:"fa fa-undo"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"history"},[_h("div",{staticClass:"players"},[_h("div",{staticClass:"player player1"},[_h("div",{staticClass:"player-header text-right"},["\n         \n        ",_h("h4",[_s(playerOneName)])])])," ",_h("div",{staticClass:"player player2"},[_h("div",{staticClass:"player-header"},[_h("h4",[_s(playerTwoName)])])])])," ",_l(gameHistory,function(e){return _h("div",[_h("div",{staticClass:"history-scores"},[_h("div",{staticClass:"history-score-left"},[_l(e.playerOneScores,function(e){return _h("p",{staticClass:"h4"},[_s(e)])})])," ",_h("div",{staticClass:"history-score-right"},[_l(e.playerTwoScores,function(e){return _h("p",{staticClass:"h4"},[_s(e)])})])])])})," ",_m(0)])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"score-styler"},[_h("div",{staticClass:"history-score-left"})," ",_h("div",{staticClass:"history-score-right"})])}]}}]);
//# sourceMappingURL=app.aa1d475942d4d1de22f1.js.map