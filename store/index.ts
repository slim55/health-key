import { getAccessorType, mutationTree, actionTree, getterTree } from 'typed-vuex';
import { PropsType as HeaderBasePropsType } from '@/components/header/HeaderBase.vue';
import { PropsType as PromoBasePropsType } from '@/components/promo/PromoBase.vue';
import { PropsType as ContentBasePropsType } from '@/components/content/ContentBase.vue';
import { PropsType as PriceListPropsType } from '@/components/price/PriceList.vue';
import { PropsType as SpecialistsBasePropsType } from '@/components/specialists/SpecialistsBase.vue';
import { PropsType as MapBasePropsType } from '@/components/map/MapBase.vue';

export interface StateType {
  phone: string;
  address: string;
  coords: [number, number];
  navigation: HeaderBasePropsType['navigation'];
  promo: PromoBasePropsType;
  content: ContentBasePropsType;
  price_list: PriceListPropsType;
  specialists: SpecialistsBasePropsType;
}

export const state = (): StateType => ({
  phone: '+7 999 900 90 90',
  address: 'г. Омск, Космический проспект 97б',
  coords: [54.978152, 73.460334],
  navigation: [
    {
      id: 'massage',
      name: 'Массаж',
    },
    {
      id: 'price-list',
      name: 'Прайс-лист',
    },
    {
      id: 'specialists',
      name: 'Специалисты',
    },
    {
      id: 'contacts',
      name: 'Контакты',
    },
  ],
  promo: {
    title: 'Оздоровительный массаж в Омске',
    list: ['Опытные специалисты', 'Индивидуальный подход к клиенту', 'Традиционные и современные методики'],
    image: '/images/promo.jpeg',
  },
  content: {
    title: 'Массаж',
    content: `
      <p>
        Массаж – широко распространённый вид вспомогательной терапии при различных заболеваниях. Он позволяет быстро
        улучшить самочувствие пациента и ускорить процесс оздоровления.
      </p>
      <img src="/images/massage-img.jpg" alt="Массаж" width="360" class="mb-2" style="float: right;" />
      <p>
        Результат массажа – комплексное оздоровление организма, снятие стресса, улучшение гибкости, расслабление и
        внутренняя умиротворенность.
      </p>
      <p>
        Для нас важно индивидуально обсудить с пациентом его проблему, чтобы эффект от массажа оказался максимально
        полезным.
      </p>
      <p>
        Правильно выполненный массаж помогает улучшить циркуляцию крови и лимфы, снять болевые ощущения, нормализовать
        работу нервной системы.
      </p>
      <p>
        Профилактический и расслабляющий массаж обычно назначают для общего укрепления организма и профилактики
        хронических заболеваний.
      </p>
      <p>
        Курс подбирается с учетом анамнеза и состояния пациента, улучшая их самочувствие и ускоряя процесс
        оздоровления.
      </p>
    `,
  },
  price_list: {
    title: 'Цены на услуги',
    prices: [
      {
        name: 'Массаж головы',
        price: '300',
      },
      {
        name: 'Массаж шейно-воротниковой зоны',
        price: '500',
      },
      {
        name: 'Массаж грудного отдела позвоночника',
        price: '500',
      },
      {
        name: 'Массаж пояснично-крестцового отдела позвоночника',
        price: '500',
      },
      {
        name: 'Массаж конечности',
        price: '500',
      },
      {
        name: 'Массаж позвоночника',
        price: '1000',
      },
      {
        name: 'Массаж сустава',
        price: '300',
      },
      {
        name: 'Общий массаж',
        price: '2000',
      },
      {
        name: 'Массаж живота',
        price: '500',
      },
    ],
  },
  specialists: {
    title: 'Специалисты',
    list: [
      {
        name: 'Беспятов Алексей Матвеевич',
        image: '/images/specialist-img1.jpg',
        description: `Массажист высшей категории<br>Стаж работы 30 лет`,
      },
      {
        name: 'Иванов Эдуард Викторович',
        image: '/images/specialist-img2.jpg',
        description: `Массажист первой категории<br>Стаж работы 25 лет`,
      },
    ],
  },
});

export type RootState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {});

export const actions = actionTree(
  { state, mutations },
  {}
);

export const getters = getterTree(state, {
  mapData(state: RootState): MapBasePropsType {
    return {
      centerMapCoords: state.coords,
      markers: [
        {
          name: state.address,
          image: '/images/map-image.jpg',
          coords: state.coords,
          phone: state.phone,
        },
      ],
      information: {
        title: 'Контакты',
        address: state.address,
        phone: state.phone,
      },
    };
  },
});

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
