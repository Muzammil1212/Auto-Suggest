import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  
  onEditorInput(event: Event) {
    const editor = event.target as HTMLTextAreaElement;
    const cursorPosition = editor.selectionStart;
    const content = editor.value.substring(0, cursorPosition);
    const lastWord: any = content.split(/\s+/).pop();
    const suggestions: any = {
      PAK: "PAKISTAN IS GOOD",
      IND: "INDIA IS BAD",
      USA: "UNITED STATES",
      // Add more suggestions as needed
    };
    
  
    if (lastWord in suggestions) {
      if ((event as InputEvent).inputType !== "deleteContentBackward") {
        const suggestion = suggestions[lastWord];
        editor.value =
          editor.value.substring(0, cursorPosition - lastWord.length) +
          suggestion +
          editor.value.substring(cursorPosition);
        editor.setSelectionRange(
          cursorPosition,
          cursorPosition + suggestion.length
        );
      } 
    }
  }
}
