export class Video {
    constructor(url, posterUrl, description, channelName, publicationDate) {
        this.url = url;
        this.posterUrl = posterUrl;
        this.description = description;
        this.channelName = channelName;
        this.publicationDate = this.CreateDatePublication(publicationDate);
        this.id = `${this.createId()}${++Video.videoCounter}`;
    }

    createId() {
        return `VT${this.description
            .split(' ')
            .map((el) => el[0])
            .join('')}`;
    }

    static videoCounter = 0;

    // вывод даты публикации
    CreateDatePublication(date) {
        const dateObject = date.split('.').reverse().join('-');
        const diff = Math.floor((new Date() - new Date(dateObject)) / 1000);

        const intervals = {
            год: 31536000,
            месяц: 2592000,
            неделя: 604800,
            день: 86400,
            час: 3600,
            минута: 60,
            секунда: 1,
        };

        for (const interval in intervals) {
            const count = Math.floor(diff / intervals[interval]);

            if (count > 0 && count <= 1) {
                return (
                    count + ' ' + interval + (count > 1 ? ' назад' : ' назад')
                );
            } else if (count > 1 && count <= 4) {
                switch (interval) {
                    case 'день':
                        return (
                            count +
                            ' ' +
                            'дня' +
                            (count > 1 ? ' назад' : ' назад')
                        );
                        break;
                    case 'неделя':
                        return (
                            count +
                            ' ' +
                            'недели' +
                            (count > 1 ? ' назад' : ' назад')
                        );
                        break;
                    case 'месяц':
                        return (
                            count +
                            ' ' +
                            'месяца' +
                            (count > 1 ? ' назад' : ' назад')
                        );
                        break;
                    case 'год':
                        return (
                            count +
                            ' ' +
                            'года' +
                            (count > 1 ? ' назад' : ' назад')
                        );
                        break;

                    default:
                        break;
                }
            } else if (count > 4) {
                switch (interval) {
                    case 'день':
                        return (
                            count +
                            ' ' +
                            'дней' +
                            (count > 1 ? ' назад' : ' назад')
                        );
                        break;
                    case 'неделя':
                        return (
                            count +
                            ' ' +
                            'недель' +
                            (count > 1 ? ' назад' : ' назад')
                        );
                        break;
                    case 'месяц':
                        return (
                            count +
                            ' ' +
                            'месяцев' +
                            (count > 1 ? ' назад' : ' назад')
                        );
                        break;
                    case 'год':
                        return (
                            count +
                            ' ' +
                            'лет' +
                            (count > 1 ? ' назад' : ' назад')
                        );
                        break;

                    default:
                        break;
                }
            }
        }

        return 'только что';
    }
}
