import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReplyComponent } from './reply/reply.component';
import { ThirdComponent } from './third/third.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddReplyComponent } from './add-reply/add-reply.component';
import { RepliesComponent } from './replies/replies.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FeedbackComponent,
    ReplyComponent,
    ThirdComponent,
    NotFoundComponent,
    AddReplyComponent,
    RepliesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
