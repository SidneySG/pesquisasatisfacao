import pytz
from django.utils import timezone
import datetime


def localdate_to_utc(localDate):
    newDate = datetime.datetime.strptime(localDate, '%Y-%m-%d %H:%M')
    local_tz = pytz.timezone(timezone.get_current_timezone_name())
    newDate = local_tz.localize(newDate)
    utc_tz = pytz.timezone('UTC')
    newDate = utc_tz.normalize(newDate.astimezone(utc_tz))
    return newDate.strftime('%Y-%m-%d %H:%M')