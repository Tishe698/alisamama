import json
import logging
import os

import telebot
from django.http import HttpResponse
from django.shortcuts import render, redirect

from .forms import FeedbackForm
from .models import MenuItem, MenuItem2, MenuItem3

# Логирование
logger = logging.getLogger(__name__)

# Токен и чат id из переменных окружения
TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN')
TELEGRAM_CHAT_ID = os.environ.get('TELEGRAM_CHAT_ID')

bot = telebot.TeleBot(TELEGRAM_BOT_TOKEN)


def send_telegram(data):
    """Отправка данных в Telegram"""

    message = json.dumps(data, indent=4, ensure_ascii=False)
    try:
        bot.send_message(TELEGRAM_CHAT_ID, message)
        logger.info("Успешная отправка в Telegram")
    except Exception as e:
        logger.error("Ошибка отправки в Telegram: %s", e)
        return False

    return True


def feedback_view(request):
    if request.method == 'POST':
        form = FeedbackForm(request.POST)

        if form.is_valid():
            if send_telegram(form.cleaned_data):
                return redirect('home')
            else:
                # Сообщение об ошибке
                return HttpResponse("Ошибка отправки формы", status=500)
        else:
            # Ошибки валидации формы
            context = {'form': form}
            return render(request, 'feedback.html', context)

    else:
        form = FeedbackForm()

    context = {'form': form}
    return render(request, 'feedback.html', context)


# Create your views here.
def index(req):
    form = FeedbackForm()
    menu_item = MenuItem.objects.first()
    menu_item2 = MenuItem2.objects.first()
    menu_item3 = MenuItem3.objects.first()
    context = {'form': form,
               'menu_item': menu_item,
               'menu_item2': menu_item2,
               'menu_item3': menu_item3,
               }

    return render(req, 'index.html', context)


def about_me(req):
    form = FeedbackForm()
    context = {'form': form
               }
    return render(req, 'about_me.html', context)


def traning(req):
    form = FeedbackForm()
    context = {'form': form
               }
    return render(req, 'traning_curse.html', context)


def master_class(req):
    form = FeedbackForm()
    context = {'form': form
               }
    return render(req, 'master_class.html', context)


def free_prognoz(req):
    form = FeedbackForm()
    context = {'form': form
               }
    return render(req, 'free_prognoz.html', context)

def express_konsultacia(req):
    form = FeedbackForm()
    context = {'form': form
               }
    return render(req, 'express_konsultacia.html', context)
