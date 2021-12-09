#import imp
#import os
#import sys



#sys.path.insert(0, os.path.dirname(__file__))


#os.execl("/usr/bin/python3.6", "python3.6", *sys.argv)

#wsgi = imp.load_source('wsgi', 'passenger_wsgi.py')
#application = wsgi.application

#    def application(environ, start_response):
#        start_response('200 OK', [('Content-type', 'text/html')])
#        return ['<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Atendimento</title> <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap" rel="stylesheet"> <style>body{font-family: Quicksand, arial, sans-serif; color: #1b1f23; text-align: center; margin-top: 250px;}</style> </head> <body> <h1> Comming soon </h1> </body> </html>']

#INTERP = '/usr/bin/python3.6'
#if sys.executable != INTERP:
#    os.execl(INTERP, INTERP, *sys.argv)


#print(sys.version)    
#print(sys.prefix)   

#from app import MyApp as application

from pesquisasatisfacao.wsgi import application