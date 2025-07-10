import lib from 'dayjs';
import 'dayjs/locale/pt-br.js'
import relativeTime from 'dayjs/plugin/relativeTime'

lib.locale('pt-br')
lib.extend(relativeTime);

export const dayjs = lib