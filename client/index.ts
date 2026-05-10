import { Context } from '@cordisjs/client'
import BilibiliScheduleCard from './BilibiliScheduleCard.vue'

export default (ctx: Context) => {
  ctx.client.router.slot({
    type: 'home',
    component: BilibiliScheduleCard,
    order: 898
  })
}
