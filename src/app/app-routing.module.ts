import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReplyComponent } from './add-reply/add-reply.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FirstComponent } from './first/first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepliesComponent } from './replies/replies.component';
import { ReplyComponent } from './reply/reply.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent},
  { path: 'feedback', component: FeedbackComponent },
  { path: 'addreply', component: AddReplyComponent },
  { path: 'replies', component: RepliesComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
