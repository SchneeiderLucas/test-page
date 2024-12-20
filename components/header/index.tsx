import React from 'react';
import { View, Pressable, Image, Dimensions, Text, Image as RNImage } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Get screen dimensions
const { height, width } = Dimensions.get('window');

/**
 * Header Component
 *
 * This component renders a header section with the following elements:
 * - A background image covering the top 20% of the screen height.
 * - A store name with additional details such as distance and minimum order amount.
 * - A logo, buttons, and information about delivery times and store status.
 * - A loyalty program promotion button.
 * - A section for featured products and bestsellers.
 *
 * @returns {JSX.Element} Header component layout.
 */
export function Header() {
  return (
    <View style={{ width: '100%', position: 'relative' }}>
      {/* Background image */}
      <Image
        source={{ uri: 'https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/groups/172616232066e32590d9527.jpeg' }}
        style={{
          width: '100%',
          height: height * 0.2,
          resizeMode: "cover",
        }}
      />

      {/* Store name section */}
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 10,
          position: 'relative',
          top: -20,
        }}
      >
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#121212',
          marginTop: -5,
          marginLeft: width * 0.15,
        }}>
          Vila do Açaí - Jardim da Penha
        </Text>
      </View>

      {/* Additional store details */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        marginLeft: width * 0.18,
      }}>
        <Text style={{
          fontSize: 12,
          color: '#121212',
          marginTop: -80,
        }}>
          Açaíteria  •  6.3 Km  •  Min. R$ 10.00
        </Text>
      </View>

      {/* Logo */}
      <View style={{
        position: 'absolute',
        top: height * 0.2 + 5,
        left: 15,
        zIndex: 1,
      }}>
        <RNImage
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aBOQwepwPMXU9dUc3YGZniD8bAFywp8RhQ&s' }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
      </View>

      {/* Delivery button and store status */}
      <View style={{
        position: 'absolute',
        top: height * 0.28 + 10,
        left: 15,
        right: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
      }}>
        <Pressable
          style={{
            backgroundColor: '#fff',
            width: '48%',
            paddingVertical: 3,
            borderRadius: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#121212',
          }}
        >
          <Text style={{
            fontSize: 14,
            color: '#121212',
            marginRight: 10,
          }}>
            Pronta entrega
          </Text>
          <Feather name="chevron-down" size={20} color="#121212" />
        </Pressable>
        <Text style={{ fontSize: 12, color: '#121212' }}>
         Hoje, 80-90 min •{' '}
        <Text style={{ color: 'green' }}>
        Aberto
       </Text>
       </Text>
      </View>
      {/* Search button */}
      <Pressable
        style={{
          position: 'absolute',
          right: 15,
          top: 30,
          width: 40,
          height: 40,
          backgroundColor: 'white',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Feather name="search" size={20} color="#121212" />
      </Pressable>

      {/* Loyalty button */}
      <View style={{ padding: 10 }}>
        <Pressable
          style={{
            backgroundColor: '#ADD8E6',
            paddingVertical: 6,
            paddingHorizontal: 30,
            borderRadius: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '97%',
            alignSelf: 'center',
            marginTop: 35,
          }}
        >
          <Feather name="gift" size={18} color="#003366" style={{ marginRight: 15 }} />
          <Text style={{ fontSize: 12, color: '#003366', fontWeight: 'bold' }}>
            Fidelidade: peça 5 vezes, ganhe R$ 30,00
          </Text>
        </Pressable>
      </View>

      {/* Divider */}
      <View
        style={{
          width: '90%',
          height: 1,
          backgroundColor: '#D3D3D3',
          marginTop: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {/* Featured Products */}
      <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#121212',
        }}>
          Produtos em Oferta  💙
        </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingHorizontal: 10,
      }}>
        {/* Product cards */}
        <View style={{
          width: '48%',
          backgroundColor: '#fff',
          borderRadius: 10,
          marginBottom: 15,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          elevation: 3,
        }}>
          <Image
            source={{ uri: 'https://images.tcdn.com.br/img/img_prod/1285775/acai_organico_puro_sem_acucar_xingu_500_g_543_1_d909170b6e6d2afd8f35f227a335faff.jpg' }}
            style={{
              width: '100%',
              height: 120,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              resizeMode: "cover",
            }}
          />
          <View style={{ padding: 10 }}>
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#121212',
            }}>
              Açaí Natural da Casa
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{
                fontSize: 12,
                color: '#121212',
                marginRight: 5,
              }}>
                R$ 35.00
              </Text>
              <Text style={{
                fontSize: 12,
                color: '#999',
                textDecorationLine: 'line-through',              
                marginRight: 5,
              }}>
                R$ 50,00
              </Text>
              
              <Pressable
                style={{
                  backgroundColor: '#ADD8E6',
                  paddingVertical: 1,
                  paddingHorizontal: 6,
                  borderRadius: 15,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 12, color: '#003366' }}>-30%</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Product 2 */}
        <View style={{
          width: '48%', 
          backgroundColor: '#fff',
          borderRadius: 10,
          marginBottom: 15,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
          elevation: 3,
        }}>
          <Image
            source={{ uri: 'https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2024/10/beneficios-acai-970x472.jpg.webp' }}
            style={{
              width: '100%',
              height: 120,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              resizeMode: "cover",
            }}
          />
          <View style={{ padding: 10 }}>
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#121212',
            }}>
               10 Litros de Açaí
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{
                fontSize: 12,
                color: '#121212',
                marginRight: 5,
              }}>
                R$ 50,00
              </Text>
              <Text style={{
                fontSize: 12,
                color: '#999',
                textDecorationLine: 'line-through',
                marginRight: 5,
              }}>
                R$100,00
              </Text>
              <Pressable
                style={{
                  backgroundColor: '#ADD8E6',
                  paddingVertical: 1,
                  paddingHorizontal: 6,
                  borderRadius: 15,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 12, color: '#003366' }}>-50%</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

    {/* Divider line before "Best of the House" */}
      <View
        style={{
          width: '90%',
          height: 1,
          backgroundColor: '#D3D3D3',
          marginTop: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {/* Title of "Best of the House" */}
      <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#121212',
        }}>
          Melhores da Casa
        </Text>
      </View>

     {/*New product "Best of the House" */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
      }}>
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/1451850592/pt/foto/acai-cups-with-fruits-and-cereal-on-the-table-ready-to-eat-in-summer-weather.jpg?s=612x612&w=0&k=20&c=SV5bjUclHuBcSQ7OUg4WnoRe2mWmXFlAnLSrOt0agn8=' }}
          style={{
            width: 160,
            height: 120,
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
        <View style={{ paddingLeft: 15, width: '55%' }}>
          <Text style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#121212',
          }}>
            Açaí Especial da Casa
          </Text>
          <Text style={{
            fontSize: 12,
            color: '#121212',
            marginTop: 5,
          }}>
            Sabor intenso e especifíco do fruto açaí
            com sabor único e agradável, que no
            momento de consumo pode ser...
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{
              fontSize: 12,
              color: '#121212',
              marginRight: 5,
            }}>
              R$20,00
            </Text>

            <Text style={{
              fontSize: 12,
              color: '#999',
              textDecorationLine: 'line-through',
              marginRight: 5,
            }}>
              R$40,00
            </Text>

            <Pressable
              style={{
                backgroundColor: '#ADD8E6',
                paddingVertical: 1,
                paddingHorizontal: 6,
                borderRadius: 15,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 12, color: '#003366' }}>-50%</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Divider line between items */}
      <View
        style={{
          width: '90%',
          height: 1,
          backgroundColor: '#D3D3D3',
          marginTop: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {/*"New product "Best of the House" */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
      }}>
        <Image
          source={{ uri: 'https://images.tcdn.com.br/img/img_prod/1098943/pote_isopor_eps_acai_240ml_pt_240_copobras_50und_2491_1_9cb2274f723806ff1b74c4f72d97990e.jpg'}}
          style={{
            width: 160,
            height: 120,
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
        
        <View style={{ paddingLeft: 15, width: '55%' }}>
          <Text style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#121212',
          }}>
            Açaí Cremoso - 500 ml
          </Text>
          <Text style={{
            fontSize: 12,
            color: '#121212',
            marginTop: 5,
          }}>
            Açaí extra cremoso de qualidade, 
            (cremes) na cumbuca de isopor, 
            com coberturas e complementos variados
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{
              fontSize: 12,
              color: '#121212',
              marginRight: 5,
            }}>
              R$15,00
            </Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#121212',
        }}>
          Melhores da Casa
        </Text>
      </View>

      {/* "New product "Best of the House" */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
      }}>
        <Image
          source={{ uri: 'https://img.freepik.com/fotos-premium/captura-aproximada-de-uma-salada-de-frutas-com-banana-morango-noz-peca-e-creme-de-acai_665346-19798.jpg?w=740' }}
          style={{
            width: 160,
            height: 120,
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
        <View style={{ paddingLeft: 15, width: '55%' }}>
          <Text style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#121212',
          }}>
            Açaí Cremoso Batido
          </Text>
          <Text style={{
            fontSize: 12,
            color: '#121212',
            marginTop: 5,
          }}>
            Sabor intenso e especifíco do fruto açaí
            com sabor único e agradável, que no
            momento de consumo pode ser...
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{
              fontSize: 12,
              color: '#121212',
              marginRight: 5,
            }}>
              R$40,00
            </Text>

            <Text style={{
              fontSize: 12,
              color: '#999',
              textDecorationLine: 'line-through',
              marginRight: 5,
            }}>
              R$80,00
            </Text>

            <Pressable
              style={{
                backgroundColor: '#ADD8E6',
                paddingVertical: 1,
                paddingHorizontal: 6,
                borderRadius: 15,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 12, color: '#003366' }}>-50%</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Divider line between items */}
      <View
        style={{
          width: '90%',
          height: 1,
          backgroundColor: '#D3D3D3',
          marginTop: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {/* "New product "Best of the House" */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
      }}>
        <Image
          source={{ uri: 'https://naturalbrasil.com.br/wp-content/uploads/2018/10/acai-ideal-para-o-pre-e-pos-treino-natural-brasil-370x200.jpg'}}
          style={{
            width: 160,
            height: 120,
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
        
        <View style={{ paddingLeft: 15, width: '55%' }}>
          <Text style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#121212',
          }}>
            Açaí Natural - 1 Litro
          </Text>
          <Text style={{
            fontSize: 12,
            color: '#121212',
            marginTop: 5,
          }}>
            Açaí extra cremoso de qualidade, com 
            coberturas e complementos variados.
            
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{
              fontSize: 12,
              color: '#121212',
              marginRight: 5,
            }}>
              R$15,00
            </Text>
          </View>
        </View>
      </View>
      
    {/* Empty Footer */}
    <View style={{ height: 50 }} />
     
   {/* End of content */}
    </View>

  );
}
