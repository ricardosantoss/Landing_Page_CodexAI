import React from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { 
  Settings, 
  BarChart3, 
  Search, 
  Calculator, 
  Target, 
  Clock, 
  Network, 
  Shield, 
  Lock,
  Play,
  ChevronRight
} from 'lucide-react'
import codexLogo from './assets/codex_ai_logo.png'
import healthTechImage from './assets/YXY9cBiwU2TH.jpg'
import aiHealthcareImage from './assets/r8FNHXkcL1Is.png'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={codexLogo} alt="Codex.AI" className="h-8 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#security" className="text-gray-700 hover:text-blue-600 transition-colors">Segurança</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Equipe</a>
              <a href="#careers" className="text-gray-700 hover:text-blue-600 transition-colors">Carreiras</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Codificação Médica <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Automatizada com IA
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-100">
            E se você tivesse um codificador que pudesse processar milhões de prontuários por dia 
            com precisão incomparável e custo otimizado?
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
            Começar Agora
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-8">
            Confiado pelos principais sistemas de saúde do Brasil
          </h2>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <Badge variant="outline" className="text-lg px-4 py-2">Hospital A</Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">Clínica B</Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">Sistema C</Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">Rede D</Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviços de codificação adaptados ao seu fluxo de trabalho
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Codificação de produção</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Automatize completamente até 90% do seu volume de codificação direto para faturamento. 
                  Nenhuma intervenção humana necessária.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Processamento de backlog</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Lidando com desafios de pessoal ou picos sazonais? Obtenha capacidade de codificação 
                  sob demanda com a Codex.AI.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Auditoria em tempo real</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Use a Codex.AI para revisar o trabalho da sua equipe de codificação, editando erros 
                  e sinalizando codificação problemática para revisão.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Explorar Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Custo, velocidade e precisão
            </h2>
            <p className="text-xl text-gray-600">
              Não há necessidade de fazer concessões, escolha os três
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custo</h3>
              <p className="text-gray-600">
                Reduza o custo total das suas operações de codificação em até 50%.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precisão</h3>
              <p className="text-gray-600">
                Reduza instantaneamente negativas de sinistros e mitigue riscos de auditoria.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Velocidade</h3>
              <p className="text-gray-600">
                Corte o tempo de codificação em dias, não horas ou minutos.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Network className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Escala</h3>
              <p className="text-gray-600">
                Adicione facilmente a capacidade de codificar milhões de prontuários por dia.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Confiabilidade</h3>
              <p className="text-gray-600">
                Garanta que suas operações de codificação nunca diminuam ou parem.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600">
                Mantenha seus dados seguros com tecnologia e protocolo líderes do setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Veja a Codex.AI em ação
            </h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={aiHealthcareImage} 
                alt="Demonstração da Codex.AI" 
                className="w-full h-64 object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Play className="mr-2 h-5 w-5" />
                  Assistir Demonstração
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Agendar uma Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={codexLogo} alt="Codex.AI" className="h-8 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400">
                Automatização de codificação médica com IA
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Tecnologia</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Soluções</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400">
                Entre em contato para saber mais sobre nossas soluções
              </p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                Fale Conosco
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © Codex.AI 2025. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
