return {
  headerTitle: mealTitle,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Favroite'
        size={23}
        iconName='ios-star'
        // onPress={() => {
        //   console.log('FAVORITE')
        // }}
        // onPress={toggleFavorite}
      />
    </HeaderButtons>
  )
}
