import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface EcosystemNode {
  id: string;
  title: string;
  icon: string;
  description: string;
  role: string;
  features: string[];
  target: string;
  color: string;
}

const ecosystemData: EcosystemNode[] = [
  {
    id: 'online',
    title: 'Онлайн-платформа',
    icon: 'Globe',
    description: 'Технологическое ядро экосистемы',
    role: 'Центральный узел, соединяющий клиентов, психологов, корпоративных партнёров и франчайзи',
    features: [
      'Маркетплейс психологов — каталог специалистов',
      'Онлайн-консультирование — видео, чат, защищённое хранилище',
      'SaaS для психологов — запись, оплаты, CRM',
      'Франчайзинговый модуль — управление филиалами',
      'Профессиональный контур — обучение, аттестация',
      'Управленческий контур — аналитика и контроль качества'
    ],
    target: 'B2C, B2P, B2B, B2F',
    color: 'bg-blue-500'
  },
  {
    id: 'psycho',
    title: 'Психологические центры',
    icon: 'Users',
    description: 'Офлайн консультации взрослых',
    role: 'Франшизная сеть центров для индивидуальных консультаций',
    features: [
      'Индивидуальные консультации',
      'Долгосрочное психологическое сопровождение',
      'Работа с кризисными состояниями',
      'Терапия личностного роста',
      'Единые стандарты качества'
    ],
    target: 'Взрослые клиенты',
    color: 'bg-indigo-500'
  },
  {
    id: 'children',
    title: 'Детские центры',
    icon: 'Heart',
    description: 'Сопровождение детей и подростков',
    role: 'Комплексное семейно-детское сопровождение',
    features: [
      'Диагностика развития ребёнка',
      'Психологическая поддержка',
      'Программы развития для детей',
      'Семейное консультирование',
      'Работа с подростками'
    ],
    target: 'Семьи с детьми',
    color: 'bg-violet-500'
  },
  {
    id: 'corporate',
    title: 'Corporate',
    icon: 'Briefcase',
    description: 'Корпоративное сопровождение',
    role: 'Сопровождение команд и лидеров компаний',
    features: [
      'Аудит корпоративной культуры',
      'Обучение сотрудников и руководителей',
      'Коучинг лидеров',
      'Программы well-being',
      'Антикризисное сопровождение команд'
    ],
    target: 'B2B — компании',
    color: 'bg-blue-600'
  },
  {
    id: 'edu',
    title: 'edu.allpsy',
    icon: 'GraduationCap',
    description: 'Обучение специалистов',
    role: 'Образовательный центр для подготовки психологов',
    features: [
      'Базовая профессиональная программа',
      'Аттестация специалистов',
      'Супервизии и разборы кейсов',
      'Методологическая поддержка',
      'Сертификация для работы в экосистеме'
    ],
    target: 'Психологи и специалисты',
    color: 'bg-cyan-600'
  }
];

const Index = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">ALLPSY</h1>
              <p className="text-sm text-slate-600 mt-1">Психологическая экосистема</p>
            </div>
            <Button variant="default" className="gap-2">
              <Icon name="Mail" size={18} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-7 mb-8">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="online">Платформа</TabsTrigger>
            <TabsTrigger value="psycho">Центры</TabsTrigger>
            <TabsTrigger value="children">Детские</TabsTrigger>
            <TabsTrigger value="corporate">Corporate</TabsTrigger>
            <TabsTrigger value="edu">Обучение</TabsTrigger>
            <TabsTrigger value="contact">Контакты</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Единая экосистема психологических услуг
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                ALLPSY объединяет онлайн-платформу, офлайн-центры, корпоративное направление
                и образовательные программы в единое профессиональное пространство
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ecosystemData.map((node, index) => (
                <Card
                  key={node.id}
                  className="hover-lift cursor-pointer border-2 border-transparent hover:border-primary transition-all"
                  onClick={() => {
                    setActiveNode(node.id);
                    setActiveTab(node.id);
                  }}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${node.color} flex items-center justify-center mb-3`}>
                      <Icon name={node.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{node.title}</CardTitle>
                    <CardDescription className="text-base">{node.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-3">
                      {node.target}
                    </Badge>
                    <p className="text-sm text-slate-600">{node.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Как работает экосистема</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <Icon name="Network" size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Единая платформа</h3>
                      <p className="text-blue-100 text-sm">
                        Онлайн-платформа связывает все направления: от подбора специалиста
                        до корпоративных программ и обучения
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Shield" size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Контроль качества</h3>
                      <p className="text-blue-100 text-sm">
                        Все специалисты проходят аттестацию, супервизии и регулярное
                        повышение квалификации в edu.allpsy
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Zap" size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Гибкость выбора</h3>
                      <p className="text-blue-100 text-sm">
                        Клиент может начать онлайн, продолжить офлайн, подключить семью
                        или корпоративную программу
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="TrendingUp" size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Масштабируемость</h3>
                      <p className="text-blue-100 text-sm">
                        Франчайзинговая модель позволяет открывать новые центры
                        с едиными стандартами по всей стране
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {ecosystemData.map((node) => (
            <TabsContent key={node.id} value={node.id} className="animate-fade-in">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-xl ${node.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon name={node.icon as any} className="text-white" size={32} />
                        </div>
                        <div>
                          <CardTitle className="text-3xl mb-2">{node.title}</CardTitle>
                          <CardDescription className="text-lg">{node.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Icon name="Target" size={20} />
                          Роль в экосистеме
                        </h3>
                        <p className="text-slate-700">{node.role}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Icon name="CheckCircle2" size={20} />
                          Ключевые возможности
                        </h3>
                        <ul className="space-y-3">
                          {node.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon name="Check" size={14} className="text-primary" />
                              </div>
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Целевая аудитория</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="default" className="text-base px-4 py-2">
                        {node.target}
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-50 border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="Link" size={20} />
                        Связи с другими блоками
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {node.id === 'online' && (
                        <>
                          <div className="text-sm text-slate-600">
                            Объединяет все направления экосистемы в единое цифровое пространство
                          </div>
                        </>
                      )}
                      {node.id !== 'online' && (
                        <>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="ArrowRight" size={16} className="text-primary" />
                            <span>Работает через онлайн-платформу</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="ArrowRight" size={16} className="text-primary" />
                            <span>Специалисты из edu.allpsy</span>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>

                  <Button className="w-full gap-2" size="lg">
                    <Icon name="ArrowRight" size={18} />
                    Узнать подробнее
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}

          <TabsContent value="contact" className="animate-fade-in">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Связаться с экосистемой ALLPSY</CardTitle>
                <CardDescription>
                  Выберите удобный способ связи или заполните форму обратной связи
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <Icon name="Mail" size={24} />
                    <span className="font-semibold">Email</span>
                    <span className="text-xs text-muted-foreground">info@allpsy.ru</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <Icon name="Phone" size={24} />
                    <span className="font-semibold">Телефон</span>
                    <span className="text-xs text-muted-foreground">8 (800) 000-00-00</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <Icon name="MessageCircle" size={24} />
                    <span className="font-semibold">Telegram</span>
                    <span className="text-xs text-muted-foreground">@allpsy_support</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <Icon name="MapPin" size={24} />
                    <span className="font-semibold">Офис</span>
                    <span className="text-xs text-muted-foreground">Москва, ул. Примерная</span>
                  </Button>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">Направления сотрудничества</h3>
                  <div className="grid gap-3">
                    {[
                      'Стать клиентом онлайн-платформы',
                      'Открыть франшизу психологического центра',
                      'Корпоративные программы для компаний',
                      'Обучение и аттестация специалистов',
                      'Партнёрство и интеграции'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-slate-600">
            <p className="mb-2">© 2024 ALLPSY. Психологическая экосистема</p>
            <p className="text-xs">Профессиональная психологическая помощь онлайн и офлайн</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
