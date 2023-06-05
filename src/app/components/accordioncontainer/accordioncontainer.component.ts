import { Component } from '@angular/core';

@Component({
  selector: 'app-accordioncontainer',
  templateUrl: './accordioncontainer.component.html',
  styleUrls: ['./accordioncontainer.component.sass'],
})
export class AccordioncontainerComponent {
  accordionInfo: any = [
    {
      titleAcc: 'How many team members can I invite?',
      infoAcc:
        'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
      titleAcc: 'What is the maximum file upload size?',
      infoAcc:
        'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
      titleAcc: 'How do I reset my password?',
      infoAcc:
        'Click “Forgot password” from the login page or “Change password” from your profile page.   A reset link will be emailed to you.',
    },
    {
      titleAcc: 'Can I cancel my subscription?',
      infoAcc:
        'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
      titleAcc: 'Do you provide additional support?',
      infoAcc:
        'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
