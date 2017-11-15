import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ReceiveRedpacket from '@/components/ReceiveRedpacket'
// import myRedpacket from '@/components/myRedpacket'
import My from '@/components/My'
import RedpacketRecord from '@/components/RedpacketRecord'
import Login from '@/components/Login'
import RedpacketMerge from '@/components/RedpacketMerge'
import MergeFail from '@/components/MergeFail'
import MergeSuccess from '@/components/MergeSuccess'
import InstructionMerge from '@/components/InstructionMerge'
import FitFinally from '@/components/FitFinally'
import ScanCodeToast from '@/components/ScanCodeToast'
import FitErr from '@/components/FitErr'
import FitSuc from '@/components/FitSuc'
import RedPacketExchangeRule from '@/components/RedPacketExchangeRule'
import RedPacketFit from '@/components/RedPacketFit'
import Exchange from '@/components/Exchange'





Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/login',
   component: Login
 },
 {
  path: '/RedpacketMerge',
  name: 'RedpacketMerge',
  component: RedpacketMerge
},
{
  path: '/FitErr',
  name: 'FitErr',
  component: FitErr
},
{
  path: '/FitSuc',
  name: 'FitSuc',
  component: FitSuc
},
{
  path: '/FitFinally',
  name: 'FitFinally',
  component: FitFinally
},
{
  path: '/RedPacketFit',
  name: 'RedPacketFit',
  component: RedPacketFit
},

{
  path: '/RedPacketExchangeRule',
  name: 'RedPacketExchangeRule',
  component: RedPacketExchangeRule
},
{
  path: '/InstructionMerge',
  name: 'InstructionMerge',
  component: InstructionMerge
},
{
  path: '/MergeFail',
  name: 'MergeFail',
  component: MergeFail
},
{
  path: '/',
  name: 'Index',
  component: Index
},
{
  path: '/MergeSuccess',
  name: 'MergeSuccess',
  component: MergeSuccess
},
{
  path: '/RedpacketRecord',
  name: 'RedpacketRecord',
  component: RedpacketRecord
},
{
  path: '/myRedpacket',
  name: 'myRedpacket',
  component: My
},
{
  path: '/ReceiveRedpacket',
  name: 'ReceiveRedpacket',
  component: ReceiveRedpacket
},
{
  path: '/ScanCodeToast',
  name: 'ScanCodeToast',
  component: ScanCodeToast
},
{
  path: '/exchange',
  component: Exchange
}


]
})
