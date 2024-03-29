import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f2f2f2",
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#424242",
  },
  categorySelector: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  categoryButton: {
    backgroundColor: "#e7e7e7",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  categoryButtonText: {
    color: "#424242",
  },
  recipeList: {
    padding: 10,
    marginHorizontal: 10,m
  },
  recipeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 8,
    elevation: 1, // Only for Android shadow
    shadowColor: "#000", // Only for iOS shadow
    shadowOffset: { width: 0, height: 1 }, // Only for iOS shadow
    shadowOpacity: 0.22, // Only for iOS shadow
    shadowRadius: 2.22, // Only for iOS shadow
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  recipeTitle: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
  // Añadir más estilos para otros componentes y ajustes según sea necesario
});
