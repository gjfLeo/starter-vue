import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import toObject from "dayjs/plugin/toObject";

import "dayjs/locale/zh-cn";

export default function loadDayjs() {
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  dayjs.extend(toObject);
  dayjs.locale("zh-cn");
}
