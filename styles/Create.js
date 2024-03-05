import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  flexed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  body: {
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  wrapper: {
    // paddingTop: 30,
  },

  visual: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#019D36',
  },

  lead: {
    fontSize: 28,
    color: 'white',
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: 'Lora',
  },

  sub: {
    fontSize: 16,
    color: '#ccc',
    fontFamily: 'Lora',
  },

  //  list styling

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  listName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Lora',
  },

  listDate: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Lora',
    marginTop: 10,
  },

  headerbutton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 4,
    backgroundColor: 'black',
  },

  hbuttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },

  listVisual: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },

  listContainer: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  listTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 20,
  },

  listItemWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  listItem: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Lora',
  },

  listQtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  listQty: {
    fontSize: 16,
    color: '#BDB8B8',
    fontWeight: '700',
    fontFamily: 'Lora',
  },

  listPriceWrap: {},

  listPrice: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Lora',
  },

  listBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    width: 200,
    marginLeft: 'auto',
  },

  listbutton: {
    // paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
  },

  buttonlistText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Lora',
  },

  edit: {
    color: 'blue',
  },

  delete: {
    color: '#E15151',
  },

  totalPrice: {
    paddingHorizontal: 40,
    paddingTop: 16,
  },

  totalPriceText: {
    fontSize: 24,
    fontFamily: 'Lora',
    fontWeight: '600',
  },

  warning: {
    marginTop: 12,
    color: 'black',
    fontSize: 14,
    fontFamily: 'Lora',
  },

  // Form styling
  form: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 10,
  },

  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
    fontFamily: 'Lora',
  },

  inputField: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    fontFamily: 'Lora',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0BDE53',
  },

  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginVertical: 20,
  },

  select: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectDrop: {
    // height: 50,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    fontFamily: 'Lora',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0BDE53',
  },

  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'Lora',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Lora',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: 'Lora',
  },

  item: {
    padding: 10,
  },
  textItem: {
    fontSize: 16,
    fontFamily: 'Lora',
  },

  measure: {
    flex: 1,
  },

  qty: {
    width: 100,
  },

  price: {
    flex: 1,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#3CCF6E',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4CDD7E',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(60, 207, 110, 0.3)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Lora',
  },
});

export {styles};
