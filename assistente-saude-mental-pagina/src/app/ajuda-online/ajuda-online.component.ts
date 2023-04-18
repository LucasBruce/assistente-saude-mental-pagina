import { Component, OnInit } from '@angular/core';
import { IOpenaiResponse } from 'src/model/entity-openai';
import { IMessages, IOpenaiRequest } from './../../model/entity-openai';
import { OpenaiService } from './../../service/openai.service';

@Component({
  selector: 'app-ajuda-online',
  templateUrl: './ajuda-online.component.html',
  styleUrls: ['./ajuda-online.component.scss']
})
export class AjudaOnlineComponent implements OnInit{

  textField = '';
  areaText = '';
  openaiResponse!: IOpenaiResponse;  
  openaiRequest: IOpenaiRequest = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: '',
      }
    ],
    temperature: 0.7
  }
  iMessages: IMessages = {
    role: 'user',
    content: '',
  };

  /**
   *@param openaiService 
      serviço de comunicação 
      com o chatGPT através da lib openai
   */
  constructor(private openaiService: OpenaiService) {}

  ngOnInit(): void {
    console.log('init...');
    this.textField = '';
  }

  operationOpenai(value: string): void {
    this.openaiRequest.messages[0].content = value;
      const openaiCallbackResponse = (resposta: IOpenaiResponse) => {
        this.openaiResponse = resposta;
        this.areaText = this.openaiResponse.choices[0].message.content;
        console.log(this.areaText);
      };

      const errorCallbackService = () => {
        console.error('Nao foi possível a comunicacao com o chatGPT!');
      };

      this.openaiService.execOpenai(
        this.openaiRequest,
        openaiCallbackResponse, 
        errorCallbackService
        )
  }

}
