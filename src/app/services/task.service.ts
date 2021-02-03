import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { dialogLembreteModel } from '../task/dialog-add/dialogLembrete.model';
import {Lembrete} from '../task/task.component'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  listarTarefas() : Observable<any>{
    return this.http.get("http://localhost:3000/tarefas/");
  }

  cadastrarTarefa(tarefa: dialogLembreteModel): Observable<any> {
    return this.http.post("http://localhost:3000/tarefas/", tarefa)

  }

  removerTarefa(id: any) {
    return this.http.delete("http://localhost:3000/tarefas/".concat(id))
  }
  
  LembreteEdit(id:any, tarefa: Lembrete): Observable<any> {
    return this.http.put( "http://localhost:3000/tarefas/".concat(id), tarefa)
  }
}
