import { CheckCircle , Lock} from 'phosphor-react' 
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type:'live' |'class';
}
export function Lesson (props: LessonProps){
  const{slug} = useParams<{slug: string}>()
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm' ", {locale: ptBR,})
  
  const isActiveLesson = slug==props.slug;


  //Quando se quer colocar um texto que não será formatado se coloca aspas simples  por isso as duplas
  return(
    //OBSERVACOES 
    //Aqui pode ser pensado futuramente em um botão mais personalizado  
    // px e py-2 seria aplicar pading em todos os lados
     //Numeros em Reactjs se passam por { } e string por ""
     //  {props.title} fica dentro de chaves pq 'e uma var js exibindo dentro de HTML
     //{props.type  == 'live' ? 'AO VIVO' : 'AULA PRATICA'} Condicional se;então;senão
    // link to=${}  -> Interpolação

   <Link to={`/event/lesson/${props.slug}`} data-aos="fade-left" className="group">
    <span className="text-gray-300">
      {availableDateFormat}
    </span>
    
    <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',{
        'bg-green-500':isActiveLesson,

    })}>
      <header className="flex items-center justify-between">
        {isLessonAvailable ? (
          <span className={classNames('text-sm text-blue-500 font-medium flex items-center gap-2',{
            'text-white': isActiveLesson,
            'text-gray-500': !isActiveLesson,
          })}>
          <CheckCircle size={20} />
            Conteudo Liberado
            </span>
        ) : (
          <span className="text-sm text-orange-500 font-medium flex items-center gap-2 disabled:true">
        <Lock size={20} />
          Em breve
          </span>
        )}
        
        <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold',{
           'border-white': isActiveLesson,
           'border-green-300': !isActiveLesson,
        })}>
          
          
          {props.type  == 'live' ? 'AO VIVO' : 'AULA PRATICA'}
          </span>
          
        </header>
      <strong className={classNames('mt-5 block',{
        'text-white': isActiveLesson,
        'text-gray-200': !isActiveLesson, 
        //Aqui se faz diferente pq colocando da maneira acima as cor gray irár sobrepor
      })}>

       {props.title}
      </strong>
    </div>
   </Link>
    
    
  )
}  
